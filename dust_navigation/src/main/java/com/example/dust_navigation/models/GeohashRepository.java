package com.example.dust_navigation.models;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GeohashRepository extends JpaRepository<Geohash,String> {
}
