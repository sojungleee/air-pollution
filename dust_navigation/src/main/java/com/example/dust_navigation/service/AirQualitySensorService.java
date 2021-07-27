package com.example.dust_navigation.service;

import com.example.dust_navigation.models.AirQualitySensor;
import com.example.dust_navigation.models.AirQualitySensorRepository;
import com.example.dust_navigation.models.AirQualitySensorRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class AirQualitySensorService {
    private final AirQualitySensorRepository airQualitySensorRepository;

    @Transactional
    public Long update(Long id, AirQualitySensorRequestDto airQualitySensorRequestDto) {
        AirQualitySensor airQualitySensor = airQualitySensorRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("아이디가 존재하지 않습니다")
        );
        airQualitySensor.update(airQualitySensorRequestDto);
        return airQualitySensor.getDevice_id();
    }
}
