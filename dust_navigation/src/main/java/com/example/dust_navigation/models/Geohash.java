package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
@Table(name="geohash",schema = "raspberry")
public class Geohash {
    @Id
    @Column(nullable = false,name="geohash")
    private String geohash;

    @Column(nullable = false,name="sensor_id")
    private int sensor_id;

    @Column(nullable = true)
    private String address;

    public Geohash(String geohash, int sensor_id, String address) {
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
    // 일대일
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="sensor_id",insertable = false,updatable = false)
    private Sensors sensors;
}
