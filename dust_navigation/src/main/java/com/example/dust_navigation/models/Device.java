package com.example.dust_navigation.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.type.descriptor.sql.TinyIntTypeDescriptor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Entity
@Table(name="device",schema = "raspberry")
public class Device {
    @Id
    @Column(nullable = false)
    private String device_id;

    @Column(nullable = false)
    private Boolean network_condition;

    @Column(nullable = false)
    private Timestamp last_updated_time;

    public Device(String device_id, Boolean network_condition, Timestamp last_updated_time) {
        this.device_id = device_id;
        this.network_condition = network_condition;
        this.last_updated_time = last_updated_time;
    }
}
