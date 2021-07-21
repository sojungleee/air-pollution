package com.example.dust_navigation.service;

import com.example.dust_navigation.models.Sensor;
import com.example.dust_navigation.models.SensorRepository;
import com.example.dust_navigation.models.SensorRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class SensorService {
    private final SensorRepository sensorRepository;

    @Transactional
    public Long update(Long id, SensorRequestDto sensorRequestDto) {
        Sensor sensor = sensorRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("아이디가 존재하지 않습니다")
        );
        sensor.update(sensorRequestDto);
        return sensor.getId();
    }
}
