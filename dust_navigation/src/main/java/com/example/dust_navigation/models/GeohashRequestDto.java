package com.example.dust_navigation.models;

import lombok.Getter;

@Getter
public class GeohashRequestDto {
    private String geohash;
    private int sensor_id;
    private String address;
}
