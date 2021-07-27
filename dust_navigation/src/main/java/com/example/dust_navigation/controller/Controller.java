package com.example.dust_navigation.controller;

import com.example.dust_navigation.models.Device;
import com.example.dust_navigation.models.DeviceRepository;
import com.example.dust_navigation.models.AirQualitySensor;
import com.example.dust_navigation.models.AirQualitySensorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class Controller {
    private final AirQualitySensorRepository airQualitySensorRepository;
    private final DeviceRepository deviceRepository;

    // read
    @GetMapping("/api/sensors")
    public List<AirQualitySensor> getAirQualitySensors() {
        return airQualitySensorRepository.findAll();
    }

    @GetMapping("/api/devices")
    public List<Device> getDevices() { return deviceRepository.findAll(); }
}
