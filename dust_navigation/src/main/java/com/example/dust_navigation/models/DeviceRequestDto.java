package com.example.dust_navigation.models;

import lombok.Getter;

import java.sql.Timestamp;

@Getter
public class DeviceRequestDto {
    private Long id;
    private int netword_condition;
    private Timestamp last_updated_time;
}
