package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Entity
@Table(name="geohash",schema = "raspberry")
public class Geohash {
    @Id
    @Column(nullable = false)
    private String geohash;

    @Column(nullable = false)
    private String sensor_id;

    @Column(nullable = false)
    private String address;

    public Geohash(String geohash, String sensor_id, String address) {
        this.geohash = geohash;
        this.sensor_id = sensor_id;
        this.address = address;
    }

    public Geohash(GeohashRequestDto geohashRequestDto) {
        this.geohash = geohashRequestDto.getGeohash();
        this.sensor_id = geohashRequestDto.getSensor_id();
        this.address = geohashRequestDto.getAddress();
    }

    public void update(GeohashRequestDto geohashRequestDto) {
        this.geohash = geohashRequestDto.getGeohash();
        this.sensor_id = geohashRequestDto.getSensor_id();
        this.address = geohashRequestDto.getAddress();
    }
    // 연관관계
    // Geohash(일) Sensors(다)
//    @OneToMany()
//    @JoinColumn(name="sensor_id")
//    private List<Sensors> sensorsList = new ArrayList<>();
}
