package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Table(name="gps",schema = "mydb")
@Entity
public class Gps {
    @Id
    @Column(nullable = false)
    private Long device_id;

    @Column(nullable = false)
    private int latitude;

    @Column(nullable = false)
    private int longitude;

    public Gps(GpsRequestDto gpsRequestDto) {
        this.device_id = gpsRequestDto.getDevice_id();
        this.latitude = gpsRequestDto.getLatitude();
        this.longitude = gpsRequestDto.getLongitude();
    }

    public Gps(Long device_id, int latitude, int longitude) {
        this.device_id = device_id;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    //-------------------연관관계 매핑-------------------//
    @OneToOne(mappedBy = "gps")
    @JoinColumn(name = "device_id")
    private Device device;

}
