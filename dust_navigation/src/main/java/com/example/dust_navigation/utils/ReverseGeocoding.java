package com.example.dust_navigation.utils;

import com.example.dust_navigation.models.AddressDto;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Component //클래스에 컴포넌트 권한 부여 ==> @RequiredArgsConstructor 와 함께 사용할 경우 스프링이 자동으로 constructor 생성
public class ReverseGeocoding {
    public String search(double lat, double lon) {
        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Pre-Conditions", "application/json");
        String body = "";

        HttpEntity<String> requestEntity = new HttpEntity<String>(body, headers);
        ResponseEntity<String> responseEntity = rest.exchange("https://apis.openapi.sk.com/tmap/geo/reversegeocoding?version=1&lat=" + lat + "&lon=" + lon + "&coordType=WGS84GEO&addressType=A03&appKey=l7xx190837b986dc4daf9a8b5d59bc6952ed", HttpMethod.GET, requestEntity, String.class);
        HttpStatus httpStatus = responseEntity.getStatusCode();
        int status = httpStatus.value();
        String response = responseEntity.getBody();
        System.out.println("Response status: " + status);
        System.out.println(response);

        return response;
    }

    public AddressDto fromJSONtoAddress(String result) {
        JSONObject rjson = new JSONObject(result); //String을 JSON 객체로

        //"JSONObject[\"addressInfo\"] is not a JSONArray.",

        JSONObject addrJson = rjson.getJSONObject("addressInfo");
        System.out.println("addrJson은: " + addrJson);
        AddressDto addrDto = new AddressDto(addrJson);

        return addrDto;
    }

    /*
    public static void main(String[] args) {
        ReverseGeocoding reverseGeocoding = new ReverseGeocoding();
        //reverseGeocoding.search(37.605523, 127.042210);
        String ret = reverseGeocoding.search(37.605523, 127.042210);
        reverseGeocoding.fromJSONtoAddress(ret);
    }
    */
}