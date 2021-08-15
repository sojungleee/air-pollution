package com.example.dust_navigation.models;

import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Timestamp;

public interface GpsRepository extends JpaRepository<Gps, Timestamp> {
}
