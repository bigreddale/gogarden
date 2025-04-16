import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {retries: 3});

export default function plantDataGet() {


    const completeRequestUrl = `http://localhost:9926/GardenHistory/?sort(-seedingDateStamp)`;

    return new Promise((resolve, reject) => {
        axios.get(completeRequestUrl)
            .then((res) => {
                const plantDataObj = {};
                res.data.forEach((record) => {
                    plantDataObj[record.id] = record;
                })
                resolve(plantDataObj);
            })
            .catch((err) => {
                reject(err);
            })
        ;
    });
}
