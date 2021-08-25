package com.example.dust_navigation.models;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AirQualitySensorRepository extends JpaRepository<AirQualitySensor,String> {

    @Query List<AirQualitySensor> findAllByGeohashStartingWithOrderByCoAsc(String geohash);
    @Query List<AirQualitySensor> findAllByGeohashStartingWithOrderByCoDesc(String geohash);

    @Query List<AirQualitySensor> findAllByGeohashStartingWithOrderByPm10Asc(String geohash);
    @Query List<AirQualitySensor> findAllByGeohashStartingWithOrderByPm10Desc(String geohash);

    @Query List<AirQualitySensor> findAllByGeohashStartingWithOrderByPm25Asc(String geohash);
    @Query List<AirQualitySensor> findAllByGeohashStartingWithOrderByPm25Desc(String geohash);
}