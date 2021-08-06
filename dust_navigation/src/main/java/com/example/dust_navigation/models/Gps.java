package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Entity
@Table(name="gps",schema = "raspberry")
public class Gps {
    @Id
    @Column(nullable = false,name="geohash")
    private String geohash;

    @Column(nullable = true)
    private Timestamp receive_time;

    @Column(nullable = false)
    private int latitude;

    @Column(nullable = false)
    private int longtitude;

    public Gps(String geohash, Timestamp receive_time, int latitude, int longtitude) {
        this.geohash = geohash;
        this.receive_time = receive_time;
        this.latitude = latitude;
        this.longtitude = longtitude;
    }

}
