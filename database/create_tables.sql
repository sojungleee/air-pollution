CREATE TABLE device (
    device_id char(8),
    network_condition Boolean,
    last_updated_time TIMESTAMP,
    PRIMARY KEY (device_id)
);
CREATE TABLE gps (
    geohash char(7),
    recieve_time TIMESTAMP,
    latitude INT,
    longitude INT,
    PRIMARY KEY (geohash)
);
CREATE TABLE air_quality_sensor (
    air_quality_id char(8),
    device_id char(8),
    co DECIMAL(4,2),
    pm10 INT,
    pm25 INT,
    PRIMARY KEY (air_quality_id),
    FOREIGN KEY (device_id) REFERENCES device (device_id)
);
CREATE TABLE sensors (
    sensor_id char(8),
    air_quality_id char(8),
    geohash char(7),
    recieve_time TIMESTAMP,
    PRIMARY KEY (sensor_id),
    FOREIGN KEY (air_quality_id) REFERENCES air_quality_sensor (air_quality_id),
    FOREIGN KEY (geohash) REFERENCES gps (geohash)
);
CREATE TABLE geohash (
    geohash char(6),
    sensor_id char(8),
    address char(30),
    FOREIGN KEY (sensor_id) REFERENCES sensors (sensor_id)
);