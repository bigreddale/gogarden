import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {retries: 3});

export default function plantDataGet() {


    const completeRequestUrl = `http://localhost:9926/GardenHistory/`;

    return new Promise((resolve, reject) => {
        axios.get(completeRequestUrl)
            .catch((err) => {
                reject(err);
            })
            .then((res) => {
                const plantDataObj = {};
                res.data.forEach((record) => {
                    plantDataObj[record.id] = record;
                })
                resolve(plantDataObj);
            });
    });
}
