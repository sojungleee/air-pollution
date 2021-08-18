package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "location", schema = "raspdb")
public class Location {
    @Id
    @Column(nullable = false, name = "geohash")
    private String geohash;

    @Column(nullable = false)
    private double latitude;

    @Column(nullable = false)
    private double longitude;

    @Column(nullable = false)
    private Timestamp receive_time;

    public Location(String geohash, double latitude, double longitude, Timestamp receive_time) {
        this.geohash = geohash;
        this.latitude = latitude;
        this.longitude = longitude;
        this.receive_time = receive_time;
    }

    public Location(LocationRequestDto locationRequestDto) {
        this.geohash = locationRequestDto.getGeohash();
        this.latitude = locationRequestDto.getLatitude();
        this.longitude = locationRequestDto.getLongitude();
        this.receive_time = locationRequestDto.getReceive_time();
    }


    public void update(LocationRequestDto locationRequestDto) {
        this.geohash = locationRequestDto.getGeohash();
    }
    // 일대일
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="geohash",insertable = false,updatable = false)
    private AirQualitySensor airQualitySensor;

}
