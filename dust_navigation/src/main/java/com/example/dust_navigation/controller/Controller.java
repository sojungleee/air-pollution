package com.example.dust_navigation.controller;

import com.example.dust_navigation.models.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class Controller {
    private final AirQualitySensorRepository airQualitySensorRepository;
    private final LocationRepository locationRepository;

    // read
    @GetMapping("/api/locations")
    public List<Location> getLocation() {
        return locationRepository.findAll();
    }

    @GetMapping("/api/locations/{geohash}")
    public Location getLocationByGeohash(@PathVariable String geohash) {
        return locationRepository.findById(geohash).orElse(null);
    }

    @GetMapping("/api/airqualitysensorsall")
    public List<AirQualitySensor> getAllAirQualitySensor() {
        return airQualitySensorRepository.findAll();
    }

    @GetMapping("/api/airqualitysensors")
    public List<AirQualitySensor> getAirQualitySensor(@RequestParam String sort, @RequestParam String item, @RequestParam String geohash, @RequestParam(defaultValue = "6") int precision) {
        List<AirQualitySensor> sortedData = new ArrayList<>();
        List<AirQualitySensor> result = new ArrayList<>();

        if (sort.equals("asc")) {
            if (item.equals("co")) sortedData = airQualitySensorRepository.findAllByOrderByCoAsc();
            else if (item.equals("pm10")) sortedData = airQualitySensorRepository.findAllByOrderByPm10Asc();
            else if (item.equals("pm25")) sortedData = airQualitySensorRepository.findAllByOrderByPm25Asc();
            else return null;
        } else if (sort.equals("desc")) {
            if (item.equals("co")) sortedData = airQualitySensorRepository.findAllByOrderByCoDesc();
            else if (item.equals("pm10")) sortedData = airQualitySensorRepository.findAllByOrderByPm10Desc();
            else if (item.equals("pm25")) sortedData = airQualitySensorRepository.findAllByOrderByPm25Desc();
            else return null;
        }

        String subGeohashStr = geohash.substring(0, precision);
        for (AirQualitySensor sensorData : sortedData) {
            if (sensorData.getGeohash().substring(0, precision).equals(subGeohashStr)) { result.add(sensorData); }
        }
        return result;
    }
}
