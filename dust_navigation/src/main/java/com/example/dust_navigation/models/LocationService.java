package com.example.dust_navigation.models;

import com.example.dust_navigation.utils.ReverseGeocoding;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.List;

@RequiredArgsConstructor
@Service
public class LocationService {

    private final LocationRepository locationRepository; //geohash, latitude, longitude, Timestamp
    private final ReverseGeocoding reverseGeocoding;

    public List<HashMap<String, Location>> getLoadAddr() {

        List<HashMap<String, Location>> resultList = new ArrayList<>();

        HashMap<String, Location> resultHash = new HashMap<String, Location>();

        List<Location> lists = new ArrayList<Location>(locationRepository.findAll());

        for(Location i : lists) {
            double lat = i.getLatitude();
            double lon = i.getLongitude();
            String resultString = reverseGeocoding.search(lon, lat); //반대로 입력 필요
            AddressDto addressDto = reverseGeocoding.fromJSONtoAddress(resultString);

            String loadAddr = addressDto.getCity_do() + " " + addressDto.getGu_gun() + " " + addressDto.getRoadName();
            System.out.println(loadAddr);

            resultHash.put(loadAddr, i);
            resultList.add(resultHash);
        }

        /*
        for (Entry<String, Location> entrySet : resultHash.entrySet()) {
            System.out.println(entrySet.getKey() + " : " + entrySet.getValue().getGeohash());
        }*/

        return resultList;
    }

    @Transactional
    public HashMap<String, Location> search(String geohash) {

        HashMap<String, Location> resultHash = new HashMap<String, Location>();

        Location location = locationRepository.findById(geohash).orElseThrow(
                () -> new IllegalArgumentException("geohash가 존재하지 않습니다.")
        );

        double lat = location.getLatitude();
        double lon = location.getLongitude();
        String resultString = reverseGeocoding.search(lon, lat); //반대로 입력 필요
        AddressDto addressDto = reverseGeocoding.fromJSONtoAddress(resultString);

        String loadAddr = addressDto.getCity_do() + " " + addressDto.getGu_gun() + " " + addressDto.getRoadName();

        resultHash.put(loadAddr, location);

        return resultHash;
    }

}