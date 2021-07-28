package com.example.dust_navigation.controller;

import com.example.dust_navigation.models.*;
import com.example.dust_navigation.service.AirQualitySensorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class Controller {
    private final AirQualitySensorRepository airQualitySensorRepository;
    private final DeviceRepository deviceRepository;
    private final GpsRepository gpsRepository;
    private final AirQualitySensorService airQualitySensorService;

    // read
    @GetMapping("/api/sensors")
    public List<AirQualitySensor> getAirQualitySensors() {
        return airQualitySensorRepository.findAll();
    }

    @PutMapping("api/sensors/{id}")
    public Long updateMemo(@PathVariable Long id, @RequestBody AirQualitySensorRequestDto requestDto){
        airQualitySensorService.update(id, requestDto);
        return id;
    }

    @GetMapping("/api/devices")
    public List<Device> getDevices() { return deviceRepository.findAll(); }

    @GetMapping("/api/gps")
    public List<Gps> getGps() { return gpsRepository.findAll(); }
}
