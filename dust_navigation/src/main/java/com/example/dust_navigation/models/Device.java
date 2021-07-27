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
    private Long id;

    @Column(nullable = false)
    private int network_condition;

    @Column(nullable = false)
    private Timestamp last_updated_time;

    public Device(Long id, int network_condition, Timestamp last_updated_time) {
        this.id = id;
        this.network_condition = network_condition;
        this.last_updated_time = last_updated_time;
    }

    //-------------------연관관계 매핑-------------------//
    @OneToOne
    private Gps gps;

    @OneToOne
    private Device device;
}
