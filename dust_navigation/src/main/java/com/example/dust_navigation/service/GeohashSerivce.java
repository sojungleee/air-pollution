package com.example.dust_navigation.service;

import com.example.dust_navigation.models.Location;
import com.example.dust_navigation.models.LocationRepository;
import com.example.dust_navigation.models.LocationRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class GeohashSerivce {
    private final LocationRepository locationRepository;

    @Transactional
    public String update(String geohash, LocationRequestDto locationRequestDto) {
        Location geo = locationRepository.findById(geohash).orElseThrow(
                () -> new IllegalArgumentException("아이디가 존재하지 않습니다.")
        );
        geo.update(locationRequestDto);
        return geo.getGeohash();
    }

}
