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
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(nullable = false,name="sensor_id")
    private int sensor_id;

    @Column(nullable = false,name="gps_id")
    private Timestamp gps_id;

    @Column(nullable = true)
    private Timestamp receive_time;

    @Column(nullable = false,name="air_quality_sensor_id")
    private Timestamp air_quality_sensor_id;

    public Sensors(int sensor_id, Timestamp gps_id, Timestamp receive_time, Timestamp air_quality_sensor_id) {
        this.sensor_id = sensor_id;
        this.gps_id = gps_id;
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
    @JoinColumn(name="gps_id",insertable = false,updatable = false)
    private Gps gps;


}
