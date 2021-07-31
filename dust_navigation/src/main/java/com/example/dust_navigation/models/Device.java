package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "device",schema = "mydb")
public class Device {

    @Id
    @Column
    private String device_id;

    @Column(nullable = false)
    private int network_condition;

    @Column(nullable = false)
    private Timestamp last_updated_time;

    public Device(String id, int network_condition, Timestamp last_updated_time) {
        this.device_id = id;
        this.network_condition = network_condition;
        this.last_updated_time = last_updated_time;
    }

    //-------------------연관관계 매핑-------------------//
    @OneToOne
    @JoinColumn(name = "device_id")
    private Gps gps;

    @OneToOne
    @JoinColumn(name = "device_id")
    private AirQualitySensor airQualitySensor;




}
