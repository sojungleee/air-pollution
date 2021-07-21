package com.example.dust_navigation.models;

import lombok.Getter;

@Getter
public class SensorRequestDto {
    private int device_id;
    private float co;
    private int pm10;
    private int pm25;
}
