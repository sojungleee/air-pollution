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
    @Column(nullable = false,name="gps_id")
    private Timestamp gps_id;

    @Column(nullable = false)
    private double latitude;

    @Column(nullable = false)
    private double longitude;

    public Gps(Timestamp gps_id, double latitude, double longitude) {
        this.gps_id = gps_id;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
