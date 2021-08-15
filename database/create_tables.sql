CREATE TABLE device (
    device_id char(8),
    network_condition Boolean,
    last_updated_time TIMESTAMP,
    PRIMARY KEY (device_id)
);
CREATE TABLE air_quality_sensor (
    air_quality_id TIMESTAMP,
    device_id char(8),
    co DECIMAL(4,2),
    pm10 INT,
    pm25 INT,
    PRIMARY KEY (air_quality_id),
    FOREIGN KEY (device_id) REFERENCES device (device_id)
);
CREATE TABLE geohash (
    geohash char(7),
    air_quality_id TIMESTAMP,
    recieve_time TIMESTAMP,
    PRIMARY KEY (geohash),
    FOREIGN KEY (air_quality_id) REFERENCES air_quality_sensor (air_quality_id)
);
