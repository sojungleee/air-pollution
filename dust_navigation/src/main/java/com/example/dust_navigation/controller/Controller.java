package com.example.dust_navigation.controller;

import com.example.dust_navigation.models.*;
import com.example.dust_navigation.utils.ReverseGeocoding;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class Controller {
    private final AirQualitySensorRepository airQualitySensorRepository;
    private final LocationRepository locationRepository;
    private final LocationService locationService;

    // read
    @GetMapping("/api/locations")
    public List<Location> getLocation() {
        return locationRepository.findAll();
    }

    @GetMapping("/api/locations/test")
    public HashMap<String, Location> searchLocation() { //리턴 타입을 HashMap<String, Location>으로 하고 String에 도로명 주소
        List<HashMap<String, Location>> resultList = new ArrayList<>(locationService.getLoadAddr());
        return resultList.get(0);
    }

    @GetMapping("/api/locations/{geohash}")
    public Location getLocationByGeohash(@PathVariable String geohash) {
        return locationRepository.findById(geohash).orElse(null);
    }

    @GetMapping("/api/locations/test/{geohash}")
    public HashMap<String, Location> searchLocationByGeohash(@PathVariable String geohash) {
        return locationService.search(geohash);
    }

    @GetMapping("/api/airqualitysensorsall")
    public List<AirQualitySensor> getAllAirQualitySensor() {
        return airQualitySensorRepository.findAll();
    }

    @GetMapping("/api/airqualitysensors")
    public List<AirQualitySensor> getAirQualitySensor(@RequestParam String sort, @RequestParam String item, @RequestParam String geohash, @RequestParam(defaultValue = "6") int precision) {

        String subGeohash = geohash.substring(0, precision);
        System.out.println(subGeohash);

        if (sort.equals("asc")) {
            if (item.equals("co")) return airQualitySensorRepository.findAllByGeohashStartingWithOrderByCoAsc(subGeohash);
            else if (item.equals("pm10")) return airQualitySensorRepository.findAllByGeohashStartingWithOrderByPm10Asc(subGeohash);
            else if (item.equals("pm25")) return airQualitySensorRepository.findAllByGeohashStartingWithOrderByPm25Asc(subGeohash);
            else return null;
        } else if (sort.equals("desc")) {
            if (item.equals("co")) return airQualitySensorRepository.findAllByGeohashStartingWithOrderByCoDesc(subGeohash);
            else if (item.equals("pm10")) return airQualitySensorRepository.findAllByGeohashStartingWithOrderByPm10Desc(subGeohash);
            else if (item.equals("pm25")) return airQualitySensorRepository.findAllByGeohashStartingWithOrderByPm25Desc(subGeohash);
            else return null;
        } else return null;
    }

    private final ReverseGeocoding reverseGeocoding;
    @GetMapping("/api/locations/search")
    public AddressDto getAddress(@RequestParam double lat, @RequestParam double lon) {
        String resultString = reverseGeocoding.search(lat, lon);
        return reverseGeocoding.fromJSONtoAddress(resultString);
    }
}
