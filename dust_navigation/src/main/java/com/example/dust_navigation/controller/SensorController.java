package com.example.dust_navigation.controller;

import com.example.dust_navigation.models.Sensor;
import com.example.dust_navigation.models.SensorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class SensorController {
    private final SensorRepository sensorRepository;

    // read
    @GetMapping("/api/sensors")
    public List<Sensor> getAirQualitySensors() {
        return sensorRepository.findAll();
    }

}
