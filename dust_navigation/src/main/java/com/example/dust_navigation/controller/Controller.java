package com.example.dust_navigation.controller;

import com.example.dust_navigation.models.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class Controller {
    private final AirQualitySensorRepository airQualitySensorRepository;
    private final GpsRepository gpsRepository;
    private final GeohashRepository geohashReposirtory;
    private final SensorsRepository sensorsRepository;

    // read
    @GetMapping("/api/geohashs")
    public List <Geohash> getGeohash() {return geohashReposirtory.findAll(); }

    @GetMapping("/api/sensors")
    public List<Sensors> getSensors() {
        return sensorsRepository.findAll();
    }

    @GetMapping("/api/gps")
    public List<Gps> getGps() { return gpsRepository.findAll(); }

    @GetMapping("/api/airqualitysensors")
    public List<AirQualitySensor> getAirQualitySensor() {return airQualitySensorRepository.findAll(); }
}
