CREATE TABLE device (
    device_id char(8),
    network_condition Boolean,
    last_updated_time TIMESTAMP,
    PRIMARY KEY (device_id)
);
CREATE TABLE location (
    geohash char(7),
    receive_time TIMESTAMP,
    latitude float,
    longitude float,
    PRIMARY KEY (geohash)
);
CREATE TABLE air_quality_sensor (
    geohash char(7) ,
    receive_time TIMESTAMP,
    device_id char(8),
    co DECIMAL(4,2),
    pm10 INT,
    pm25 INT,
    FOREIGN KEY (geohash) REFERENCES location (geohash),
    FOREIGN KEY (device_id) REFERENCES device (device_id)
);