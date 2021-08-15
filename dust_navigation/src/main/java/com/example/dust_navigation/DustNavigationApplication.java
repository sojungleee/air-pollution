package com.example.dust_navigation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class DustNavigationApplication {

    public static void main(String[] args) {
        SpringApplication.run(DustNavigationApplication.class);

    }
}
