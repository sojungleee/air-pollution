package com.example.dust_navigation.models;

import lombok.Getter;

@Getter
public class GpsRequestDto {
    private String device_id;
    private int latitude;
    private int longitude;
}
