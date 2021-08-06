package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
@Table(name="air_quality_sensor",schema = "raspberry")
public class AirQualitySensor {
    @Id
    @Column(nullable = false,name="air_quality_sensor_id")
    private String air_quality_sensor_id;

    @Column(nullable = false)
    private String device_id;

    @Column(nullable = false)
    private float co;

    @Column(nullable = false)
    private int pm10;

    @Column(nullable = false)
    private int pm25;

    public AirQualitySensor(String air_quality_sensor_id,String device_id, float co, int pm10, int pm25) {
        this.air_quality_sensor_id = air_quality_sensor_id;
        this.device_id =device_id;
        this.co = co;
        this.pm10 = pm10;
        this.pm25 =pm25;
    }

}
