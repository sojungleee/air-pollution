package com.example.dust_navigation.models;

import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class LocationRequestDto {
    private String geohash;
    private double latitude;
    private double longitude;
    private Timestamp receive_time;
}
