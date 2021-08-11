package com.example.dust_navigation;

import ch.hsr.geohash.GeoHash;
import com.example.dust_navigation.models.Geohash;
import com.example.dust_navigation.models.GeohashRepository;
import com.example.dust_navigation.models.Sensors;
import com.example.dust_navigation.models.SensorsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.util.List;

@EnableJpaAuditing
@SpringBootApplication
public class DustNavigationApplication {

    public static void main(String[] args) {
        SpringApplication.run(DustNavigationApplication.class);

    }
    @Bean
    public CommandLineRunner demo(GeohashRepository geohashRepository, SensorsRepository sensorsRepository) {
        return (args) -> {
            // save a geohash
            List<Sensors> sensorsList = sensorsRepository.findAll();
            for (Sensors sensors : sensorsRepository.findAll()) {
                String geohash = GeoHash.geoHashStringWithCharacterPrecision(sensors.getGps().getLongitude(),sensors.getGps().getLatitude(), 7);
                int sensor_id = sensors.getSensor_id();
                geohashRepository.save(new Geohash(geohash, sensor_id, null));
                System.out.println(geohash+","+sensor_id);
            }
        };
    }

}
