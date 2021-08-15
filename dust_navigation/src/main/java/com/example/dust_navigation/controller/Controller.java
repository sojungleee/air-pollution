package com.example.dust_navigation.controller;

import com.example.dust_navigation.models.*;
import com.example.dust_navigation.service.GeohashSerivce;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class Controller {
    private final AirQualitySensorRepository airQualitySensorRepository;
    private final GpsRepository gpsRepository;
    private final LocationRepository geohashReposirtory;
    private final SensorsRepository sensorsRepository;

    //service
    private final GeohashSerivce geohashSerivce;

    // read
    @GetMapping("/api/geohashs")
    public List <Location> getGeohash() {return geohashReposirtory.findAll(); }

    @GetMapping("/api/sensors")
    public List<Sensors> getSensors() {
        return sensorsRepository.findAll();
    }

    @GetMapping("/api/gps")
    public List<Gps> getGps() { return gpsRepository.findAll(); }

    @GetMapping("/api/airqualitysensors")
    public List<AirQualitySensor> getAirQualitySensor() {return airQualitySensorRepository.findAll(); }

    // add
    @PostMapping("/api/geohashs")
    public Location createGeohash (@RequestBody LocationRequestDto locationRequestDto) {
        Location geo = new Location(locationRequestDto);
        geohashReposirtory.save(geo);
        return geo;
    }
    @PutMapping("/api/geohashs/{hash}")
    public String updateGeohash (@PathVariable String hash, @RequestBody LocationRequestDto locationRequestDto) {
        geohashSerivce.update(hash, locationRequestDto);
        return hash;
    }
}
