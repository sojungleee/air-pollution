package com.example.dust_navigation.service;

import com.example.dust_navigation.models.Geohash;
import com.example.dust_navigation.models.GeohashRepository;
import com.example.dust_navigation.models.GeohashRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class GeohashSerivce {
    private final GeohashRepository geohashRepository;

    @Transactional
    public String update(String geohash, GeohashRequestDto geohashRequestDto) {
        Geohash geo = geohashRepository.findById(geohash).orElseThrow(
                () -> new IllegalArgumentException("아이디가 존재하지 않습니다.")
        );
        geo.update(geohashRequestDto);
        return geo.getGeohash();
    }
}
