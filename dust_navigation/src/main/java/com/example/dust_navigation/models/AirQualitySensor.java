package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
@Table(name="air_quality_sensor",schema = "mydb")
public class AirQualitySensor{

    @Id
    @Column(nullable = false)
    private String device_id;

    @Column(nullable = false)
    private float co;

    @Column(nullable = false)
    private int pm10;

    @Column(nullable = false)
    private int pm25;

    @Column(nullable = false)
    private int air_index;

    public AirQualitySensor(String device_id, float co, int pm10, int pm25, int air_index){
        this.device_id = device_id;
        this.co = co;
        this.pm10 = pm10;
        this.pm25 = pm25;
        this.air_index = air_index;
    }
    public AirQualitySensor(AirQualitySensorRequestDto airQualitySensorRequestDto){
        this.device_id = airQualitySensorRequestDto.getDevice_id();
        this.co = airQualitySensorRequestDto.getCo();
        this.pm10 = airQualitySensorRequestDto.getPm10();
        this.pm25 = airQualitySensorRequestDto.getPm25();
        this.air_index = airQualitySensorRequestDto.getAir_index();
    }
    public void update (AirQualitySensorRequestDto airQualitySensorRequestDto){
        this.device_id = airQualitySensorRequestDto.getDevice_id();
        this.co = airQualitySensorRequestDto.getCo();
        this.pm10 = airQualitySensorRequestDto.getPm10();
        this.pm25 = airQualitySensorRequestDto.getPm25();
        this.air_index = airQualitySensorRequestDto.getAir_index();
    }

}
