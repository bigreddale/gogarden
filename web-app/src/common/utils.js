export const sortByDateDesc = (a, b) => {
    if (new Date(a.seedingDateStamp) < new Date(b.seedingDateStamp)) {
        return 1;
    }
    if (new Date(a.seedingDateStamp) > new Date(b.seedingDateStamp)) {
        return -1;
    }
    return 0;
}

export const localizeDateStamps = (record) => {
    return {
        ...record,
        seedingDateStamp: new Date(record.seedingDateStamp).toLocaleDateString(),
        plantingDateStamp: new Date(record.plantingDateStamp).toLocaleDateString(),
        firstHarvestDateStamp: new Date(record.firstHarvestDateStamp).toLocaleDateString()
    }
}