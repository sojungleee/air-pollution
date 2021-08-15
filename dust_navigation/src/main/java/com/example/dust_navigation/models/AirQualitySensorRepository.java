package com.example.dust_navigation.models;

import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Timestamp;

public interface AirQualitySensorRepository extends JpaRepository<AirQualitySensor, Timestamp> {
}
