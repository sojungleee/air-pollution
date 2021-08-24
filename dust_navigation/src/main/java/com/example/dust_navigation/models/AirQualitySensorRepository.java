package com.example.dust_navigation.models;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AirQualitySensorRepository extends JpaRepository<AirQualitySensor,String> {
    List<AirQualitySensor> findAllByOrderByCoAsc();
    List<AirQualitySensor> findAllByOrderByCoDesc();

    List<AirQualitySensor> findAllByOrderByPm10Asc();
    List<AirQualitySensor> findAllByOrderByPm10Desc();

    List<AirQualitySensor> findAllByOrderByPm25Asc();
    List<AirQualitySensor> findAllByOrderByPm25Desc();
}