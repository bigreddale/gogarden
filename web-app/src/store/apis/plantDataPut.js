import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {retries: 3});

export default function plantDataPut(data) {


    const completeRequestUrl = `http://localhost:9926/GardenHistory/${data.id}`;

    return new Promise((resolve, reject) => {
        axios.put(completeRequestUrl, data, {headers: {'Content-Type': 'application/json'}})
            .catch((err) => {
                reject(err);
            })
            .then((res) => {
                resolve('success');
            });
    });
}
