import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {retries: 3});

export default function writePlantData(data) {


    const completeRequestUrl = `http://localhost:9926/GardenHistory/${data.id}`;

    return new Promise((resolve, reject) => {
        axios.delete(completeRequestUrl)
            .then(() => {
                resolve('success');
            })
            .catch((err) => {
                reject(err);
            });
    });
}
