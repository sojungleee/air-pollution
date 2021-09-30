import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";

const columns = [
    {
        title: '날짜',
        field: 'receive_time',
    },
    {
        title: 'pm10',
        field: 'airQualitySensor.pm10',
    },
    {
        title: 'pm25',
        field: 'airQualitySensor.pm25',
    },
    {
        title: 'co',
        field: 'airQualitySensor.co',
    },
    {
        title: 'ozone',
        field: 'airQualitySensor.ozone',
    },
];

const Statistics = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/api/locations')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, [] )
    if (loading) return <p>Loading...</p>;
    console.log(data);

    return (
      <MainContainer>
          <Panel title="통계 정보"/>
          <div>
              <MaterialTable
                  title={"테이블 제목 뭐로 할까요?"}
                  columns={columns}
                  data={data}
                  options={{
                      sorting: true,
                      paging: false,
                      search: false,
                      draggable: false
                  }}
              />
          </div>
      </MainContainer>
    );
}

const MainContainer = styled.div`
    // background-color: lightblue;
    width: 100vw;
    height: 100vh;
    font-family: "nanum";
`;

export default Statistics;