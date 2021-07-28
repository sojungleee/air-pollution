package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
@Table(name="air_quality_sensor",schema = "mydb")
public class AirQualitySensor extends Timestamped{

    @Id
    @Column(nullable = false)
    private Long device_id;

    @Column(nullable = false)
    private float co;

    @Column(nullable = false)
    private int pm10;

    @Column(nullable = false)
    private int pm25;

    public AirQualitySensor(Long device_id, float co, int pm10, int pm25){
        this.device_id = device_id;
        this.co = co;
        this.pm10 = pm10;
        this.pm25 = pm25;
    }
    public AirQualitySensor(AirQualitySensorRequestDto airQualitySensorRequestDto){
        this.device_id = airQualitySensorRequestDto.getDevice_id();
        this.co = airQualitySensorRequestDto.getCo();
        this.pm10 = airQualitySensorRequestDto.getPm10();
        this.pm25 = airQualitySensorRequestDto.getPm25();
    }
    public void update (AirQualitySensorRequestDto airQualitySensorRequestDto){
        this.device_id = airQualitySensorRequestDto.getDevice_id();
        this.co = airQualitySensorRequestDto.getCo();
        this.pm10 = airQualitySensorRequestDto.getPm10();
        this.pm25 = airQualitySensorRequestDto.getPm25();
    }

    //-------------------연관관계 매핑-------------------//
    @OneToOne(mappedBy = "gps")
    @JoinColumn(name = "device_id")
    private Device device;
}
