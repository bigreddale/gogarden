import React, {useEffect, useMemo} from 'react'
import PlantingTable from './components/plantDataTable.jsx';
import {fetchPlantData, getAllRecords} from "./store/plantSlice.js";
import {useDispatch, useSelector} from "react-redux";
import CustomButton from "./components/button.jsx";
import DataEntryForm from "./components/dataEntryForm.jsx";


function App() {
    const plantDataObj = useSelector(getAllRecords);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = React.useState(false);

    const plantDataArray = useMemo(() => Object.keys(plantDataObj).map((key) => plantDataObj[key]), [plantDataObj]);

    useEffect(() => {
        dispatch(fetchPlantData());
    }, []);

    const addEntry = () => {
        setShowModal(true);
    }

    const finishEntry = () => {
        setShowModal(false);
    }

  return (
    <>
        <h1>Planting Table</h1>
        <CustomButton onClick={addEntry}>Add New Entry</CustomButton>
        <PlantingTable data={plantDataArray} />
        <DataEntryForm isActive={showModal} doClose={finishEntry} />


    </>
  )
}

export default App
