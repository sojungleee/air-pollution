package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Entity
@Table(name="air_quality_sensor",schema = "raspdb")
public class AirQualitySensor {
    @Id
    @Column(nullable = false,name="geohash")
    private String geohash;

    @Column(nullable = false)
    private String device_id;

    @Column(nullable = false)
    private float ozone;

    @Column(nullable = false)
    private float co;

    @Column(nullable = false)
    private float pm10;

    @Column(nullable = false)
    private float pm25;

    public AirQualitySensor(String geohash,String device_id, float ozone, float co, float pm10, float pm25) {
        this.geohash = geohash;
        this.device_id =device_id;
        this.ozone = ozone;
        this.co = co;
        this.pm10 = pm10;
        this.pm25 =pm25;
    }

}
