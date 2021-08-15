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
    private Timestamp recieve_time;

    public Location(String geohash, double latitude, double longitude, Timestamp recieve_time) {
        this.geohash = geohash;
        this.latitude = latitude;
        this.longitude = longitude;
        this.recieve_time = recieve_time;
    }

    public Location(LocationRequestDto locationRequestDto) {
        this.geohash = locationRequestDto.getGeohash();
        this.latitude = locationRequestDto.getLatitude();
        this.longitude = locationRequestDto.getLongitude();
        this.recieve_time = locationRequestDto.getRecieve_time();
    }


    public void update(LocationRequestDto locationRequestDto) {
        this.geohash = locationRequestDto.getGeohash();
    }
    // 일대일
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="geohash",insertable = false,updatable = false)
    private AirQualitySensor airQualitySensor;

}
