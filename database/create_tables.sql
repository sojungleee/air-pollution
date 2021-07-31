CREATE TABLE device (
    id char(8),
    network_condition Boolean,
    last_updated_time TIMESTAMP,
    PRIMARY KEY (id)
);
CREATE TABLE gps (
    device_id char(8),
    latitude INT,
    longitude INT,
    FOREIGN KEY (device_id) REFERENCES device (id)
);
CREATE TABLE air_quality_sensor (
    device_id char(8),
    co DECIMAL(4,2),
    pm10 INT,
    pm25 INT,
    air_index INT,
    FOREIGN KEY (device_id) REFERENCES device (id)
);
