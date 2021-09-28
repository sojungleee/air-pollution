import React, { useState } from 'react';
import axios from 'axios';

const Distribution = () => {
    const [data, setData ] = useState(null);
    const onClick = () => {
        axios.get('http://localhost:8080/api/locations').then(response => { setData(response.data)});
    };
    return (
    <div>
        <h1>Dust Navigation Open API</h1>
        <br />
        <div>
            <button onClick={ onClick }>모든 지역 대기 정보 API 불러오기</button>
        </div>
        <br />
        {data && <textarea rows={20} cols={60} value={JSON.stringify(data, null, 5)} readOnly={true}/>}
    </div>
    );
};

export default Distribution;