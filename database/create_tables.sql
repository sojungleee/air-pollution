CREATE TABLE device (
    id INT,
    network_condition TINYINT(1),
    last_updated_time TIMESTAMP,
    PRIMARY KEY (id)
);
CREATE TABLE gps (
    device_id INT,
    latitude INT,
    longitude INT,
    FOREIGN KEY (device_id) REFERENCES device (id)
);
CREATE TABLE air_quality_sensor (
    device_id INT,
    co DECIMAL(4,2),
    pm10 INT,
    pm25 INT,
    air_index INT,
    FOREIGN KEY (device_id) REFERENCES device (id)
);
