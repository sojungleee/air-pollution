package com.example.dust_navigation.controller;

import com.example.dust_navigation.models.Device;
import com.example.dust_navigation.models.DeviceRepository;
import com.example.dust_navigation.models.Sensor;
import com.example.dust_navigation.models.SensorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class Controller {
    private final SensorRepository sensorRepository;
    private final DeviceRepository deviceRepository;

    // read
    @GetMapping("/api/sensors")
    public List<Sensor> getAirQualitySensors() {
        return sensorRepository.findAll();
    }

    @GetMapping("/api/devices")
    public List<Device> getDevices() { return deviceRepository.findAll(); }
}
