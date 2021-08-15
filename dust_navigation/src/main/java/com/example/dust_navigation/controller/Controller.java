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
    private final LocationRepository locationRepository;

    //service
    private final GeohashSerivce geohashSerivce;

    // read
    @GetMapping("/api/locations")
    public List <Location> getLocation() {return locationRepository.findAll(); }

    @GetMapping("/api/airqualitysensors")
    public List<AirQualitySensor> getAirQualitySensor() {return airQualitySensorRepository.findAll(); }

}
