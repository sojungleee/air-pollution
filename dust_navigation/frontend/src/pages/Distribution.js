import React, { useState } from 'react';
import axios from 'axios';

const Distribution = () => {
    const [data, setData ] = useState(null);
    const onClick = () => {
        axios.get('http://localhost:8080/api/locations').then(response => { setData(response.data)});
    };
    return (
    <div>
        <div>
            <button onClick={ onClick }>불러오기</button>
        </div>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    </div>
    );
};

export default Distribution;