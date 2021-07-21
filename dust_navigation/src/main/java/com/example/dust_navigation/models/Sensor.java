package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
@Table(name="air_quality_sensor",schema = "mydb")
public class Sensor extends Timestamped{

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @Column(nullable = false)
    private int device_id;

    @Column(nullable = false)
    private float co;

    @Column(nullable = false)
    private int pm10;

    @Column(nullable = false)
    private int pm25;

    public Sensor(int device_id, float co, int pm10, int pm25){
        this.device_id = device_id;
        this.co = co;
        this.pm10 = pm10;
        this.pm25 = pm25;
    }
    public Sensor(SensorRequestDto sensorRequestDto){
        this.device_id = sensorRequestDto.getDevice_id();
        this.co = sensorRequestDto.getCo();
        this.pm10 = sensorRequestDto.getPm10();
        this.pm25 = sensorRequestDto.getPm25();
    }
    public void update (SensorRequestDto sensorRequestDto){
        this.device_id = sensorRequestDto.getDevice_id();
        this.co = sensorRequestDto.getCo();
        this.pm10 = sensorRequestDto.getPm10();
        this.pm25 = sensorRequestDto.getPm25();
    }
}
