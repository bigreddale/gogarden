import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3 });

export default function writePlantData(data) {


    const completeRequestUrl = `http://localhost:9926/GardenHistory/`;

    return new Promise((resolve, reject) => {
        axios.post(completeRequestUrl, data, {headers: { 'Content-Type': 'application/json' }})
            .catch((err) => {
                reject(err);
            })
            .then((res) => {
                console.log('post res', res.data)
                resolve(res.data);
            });
    });
}
