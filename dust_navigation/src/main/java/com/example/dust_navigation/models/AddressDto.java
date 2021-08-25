package com.example.dust_navigation.models;

import lombok.Getter;
import org.json.JSONObject;

@Getter
public class AddressDto {
    private String city_do;
    private String gu_gun;
    private String roadName;

    public AddressDto(JSONObject addressJson) {
        this.city_do = addressJson.getString("city_do");
        this.gu_gun = addressJson.getString("gu_gun");
        this.roadName = addressJson.getString("roadName");
    }
}