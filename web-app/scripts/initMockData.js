import plantDataPost from "../src/store/apis/plantDataPost.js";

const mockData = [
    {
        "plantType": "Tomato",
        "seedingDateStamp": "2024-01-10",
        "germinationRate": 85,
        "plantingNumber": 1,
        "plantingDateStamp": "2024-01-25",
        "firstHarvestDateStamp": "2024-04-15",
        "harvestVolume": 3.2
    },
    {
        "plantType": "Cucumber",
        "seedingDateStamp": "2024-01-15",
        "germinationRate": 90,
        "plantingNumber": 2,
        "plantingDateStamp": "2024-02-01",
        "firstHarvestDateStamp": "2024-04-20",
        "harvestVolume": 2.5
    },
    {
        "plantType": "Lettuce",
        "seedingDateStamp": "2024-01-20",
        "germinationRate": 75,
        "plantingNumber": 3,
        "plantingDateStamp": "2024-02-05",
        "firstHarvestDateStamp": "2024-03-15",
        "harvestVolume": 1.8
    },
    {
        "plantType": "Carrot",
        "seedingDateStamp": "2024-01-25",
        "germinationRate": 80,
        "plantingNumber": 4,
        "plantingDateStamp": "2024-02-10",
        "firstHarvestDateStamp": "2024-05-01",
        "harvestVolume": 4.0
    },
    {
        "plantType": "Spinach",
        "seedingDateStamp": "2024-01-30",
        "germinationRate": 88,
        "plantingNumber": 5,
        "plantingDateStamp": "2024-02-15",
        "firstHarvestDateStamp": "2024-03-25",
        "harvestVolume": 2.0
    },
    {
        "plantType": "Zucchini",
        "seedingDateStamp": "2024-02-01",
        "germinationRate": 92,
        "plantingNumber": 6,
        "plantingDateStamp": "2024-02-20",
        "firstHarvestDateStamp": "2024-05-10",
        "harvestVolume": 3.7
    },
    {
        "plantType": "Pepper",
        "seedingDateStamp": "2024-02-05",
        "germinationRate": 78,
        "plantingNumber": 7,
        "plantingDateStamp": "2024-02-25",
        "firstHarvestDateStamp": "2024-05-20",
        "harvestVolume": 3.1
    },
    {
        "plantType": "Onion",
        "seedingDateStamp": "2024-02-10",
        "germinationRate": 84,
        "plantingNumber": 8,
        "plantingDateStamp": "2024-03-01",
        "firstHarvestDateStamp": "2024-06-10",
        "harvestVolume": 4.5
    },
    {
        "plantType": "Broccoli",
        "seedingDateStamp": "2024-02-15",
        "germinationRate": 81,
        "plantingNumber": 9,
        "plantingDateStamp": "2024-03-05",
        "firstHarvestDateStamp": "2024-06-15",
        "harvestVolume": 2.8
    },
    {
        "plantType": "Kale",
        "seedingDateStamp": "2024-02-20",
        "germinationRate": 87,
        "plantingNumber": 10,
        "plantingDateStamp": "2024-03-10",
        "firstHarvestDateStamp": "2024-05-30",
        "harvestVolume": 2.3
    },
    {
        "plantType": "Eggplant",
        "seedingDateStamp": "2024-02-25",
        "germinationRate": 76,
        "plantingNumber": 11,
        "plantingDateStamp": "2024-03-15",
        "firstHarvestDateStamp": "2024-06-20",
        "harvestVolume": 3.0
    },
    {
        "plantType": "Corn",
        "seedingDateStamp": "2024-03-01",
        "germinationRate": 91,
        "plantingNumber": 12,
        "plantingDateStamp": "2024-03-20",
        "firstHarvestDateStamp": "2024-07-01",
        "harvestVolume": 5.5
    },
    {
        "plantType": "Beetroot",
        "seedingDateStamp": "2024-03-05",
        "germinationRate": 82,
        "plantingNumber": 13,
        "plantingDateStamp": "2024-03-25",
        "firstHarvestDateStamp": "2024-06-25",
        "harvestVolume": 2.9
    },
    {
        "plantType": "Radish",
        "seedingDateStamp": "2024-03-10",
        "germinationRate": 79,
        "plantingNumber": 14,
        "plantingDateStamp": "2024-03-30",
        "firstHarvestDateStamp": "2024-04-30",
        "harvestVolume": 1.4
    },
    {
        "plantType": "Celery",
        "seedingDateStamp": "2024-03-15",
        "germinationRate": 85,
        "plantingNumber": 15,
        "plantingDateStamp": "2024-04-05",
        "firstHarvestDateStamp": "2024-06-30",
        "harvestVolume": 2.6
    },
    {
        "plantType": "Pumpkin",
        "seedingDateStamp": "2024-03-20",
        "germinationRate": 89,
        "plantingNumber": 16,
        "plantingDateStamp": "2024-04-10",
        "firstHarvestDateStamp": "2024-09-15",
        "harvestVolume": 8.2
    },
    {
        "plantType": "Cauliflower",
        "seedingDateStamp": "2024-03-25",
        "germinationRate": 83,
        "plantingNumber": 17,
        "plantingDateStamp": "2024-04-15",
        "firstHarvestDateStamp": "2024-07-10",
        "harvestVolume": 3.3
    },
    {
        "plantType": "Chili",
        "seedingDateStamp": "2024-03-30",
        "germinationRate": 86,
        "plantingNumber": 18,
        "plantingDateStamp": "2024-04-20",
        "firstHarvestDateStamp": "2024-07-20",
        "harvestVolume": 2.2
    },
    {
        "plantType": "Garlic",
        "seedingDateStamp": "2024-04-01",
        "germinationRate": 80,
        "plantingNumber": 19,
        "plantingDateStamp": "2024-04-25",
        "firstHarvestDateStamp": "2024-08-15",
        "harvestVolume": 3.6
    },
    {
        "plantType": "Sweet Potato",
        "seedingDateStamp": "2024-04-05",
        "germinationRate": 77,
        "plantingNumber": 20,
        "plantingDateStamp": "2024-04-30",
        "firstHarvestDateStamp": "2024-10-01",
        "harvestVolume": 6.0
    }
]


mockData.forEach((record, index) => {
    plantDataPost(record)
        .then(() => {
            console.log('Successfully posted record #', index);
        })
        .catch((e) => {
            console.error(`Failed to post record #${index} -- ${e.message}`)
        });
})