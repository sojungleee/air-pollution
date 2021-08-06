package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Entity
@Table(name="sensors",schema = "raspberry")
public class Sensors {
    @Id
    @Column(nullable = false)
    private String sensor_id;

    @Column(nullable = false,name="geohash")
    private String geohash;

    @Column(nullable = true)
    private Timestamp receive_time;

    @Column(nullable = false,name="air_quality_sensor_id")
    private String air_quality_sensor_id;

    public Sensors(String sensor_id, String geohash, Timestamp receive_time, String air_quality_sensor_id) {
        this.sensor_id = sensor_id;
        this.geohash = geohash;
        this.receive_time = receive_time;
        this.air_quality_sensor_id = air_quality_sensor_id;
    }

    // 연관관계
    // Sensors가 AirQualitySensor 참조
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="air_quality_sensor_id",insertable = false,updatable = false)
    private AirQualitySensor airQualitySensor;

    // Sensors가 Gps 참조
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="geohash",insertable = false,updatable = false)
    private Gps gps;

//    @ManyToOne
//    @JoinColumn(name="sensor_id",insertable = false,updatable = false)
//    private Geohash geo;
}
