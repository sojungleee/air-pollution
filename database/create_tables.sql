CREATE TABLE device (
    device_id char(8),
    network_condition Boolean,
    last_updated_time TIMESTAMP,
    PRIMARY KEY (device_id)
);
CREATE TABLE gps (
    gps_id TIMESTAMP,
    latitude FLOAT(7,4),
    longitude FLOAT(7,4),
    PRIMARY KEY (gps_id)
);
CREATE TABLE air_quality_sensor (
    air_quality_id INT,
    device_id char(8),
    co DECIMAL(4,2),
    pm10 INT,
    pm25 INT,
    PRIMARY KEY (air_quality_id),
    FOREIGN KEY (device_id) REFERENCES device (device_id)
);
CREATE TABLE sensors (
    sensor_id INT,
    air_quality_id INT,
    gps_id TIMESTAMP,
    recieve_time TIMESTAMP,
    PRIMARY KEY (sensor_id),
    FOREIGN KEY (air_quality_id) REFERENCES air_quality_sensor (air_quality_id),
    FOREIGN KEY (gps_id) REFERENCES gps (gps_id)
);
CREATE TABLE geohash (
    geohash char(7),
    sensor_id INT,
    address char(30),
    PRIMARY KEY (geohash),
    FOREIGN KEY (sensor_id) REFERENCES sensors (sensor_id)
);