import React, {useEffect, useMemo} from 'react'
import PlantingDataTable from './components/plantingDataTable.jsx';
import {fetchPlantData, getAllRecords} from "./store/plantSlice.js";
import {useDispatch, useSelector} from "react-redux";
import CustomButton from "./components/button.jsx";
import PlantingEntryForm from "./components/plantingEntryForm.jsx";
import styled from "styled-components";


function App() {
    const plantDataObj = useSelector(getAllRecords);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = React.useState(false);

    const sortByDateDesc = (a, b) => {
        if (new Date(a.seedingDateStamp) < new Date(b.seedingDateStamp)) {
            return 1;
        }
        if (new Date(a.seedingDateStamp) > new Date(b.seedingDateStamp)) {
            return -1;
        }
        return 0;
    }

    const plantDataArray = useMemo(() => plantDataObj ? Object.keys(plantDataObj).map((key) => plantDataObj[key]).sort(sortByDateDesc) : [], [plantDataObj]);

    if (plantDataObj === null) {
        dispatch(fetchPlantData());
    }

    const addEntry = () => {
        setShowModal(true);
    }

    const finishEntry = () => {
        setShowModal(false);
    }

    return (
        <RootElement>
            <div className="header">
                <h1>Planting Table</h1>
                <CustomButton onClick={addEntry}>Add New Entry</CustomButton>
            </div>
            <PlantingDataTable data={plantDataArray}/>
            {showModal && <PlantingEntryForm isActive doClose={finishEntry}/>}


        </RootElement>
    )
}

const RootElement = styled.div`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    padding: 0 1em;
    max-width: 1200px;

    .header {
        display: flex;

        > h1 {
            flex: 1;
        }

        > div {
            margin: auto;
        }
    }

`
export default App
