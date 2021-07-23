package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Entity
@Table(name="device",schema = "mydb")
public class Device {

    @Id
    private Long id;

    @Column(nullable = false)
    private int network_condition;

    @Column(nullable = false)
    private Timestamp last_updated_time;
}
