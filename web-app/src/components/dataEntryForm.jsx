import React from 'react';
import { useForm } from '@tanstack/react-form';
import CustomButton from './button.jsx';
import styled from "styled-components";
import ReactModal from 'react-modal';
import {updatePlantData, writePlantData} from "../store/plantSlice.js";
import {useDispatch} from "react-redux";



const DataEntryForm = ({ recordValues, doClose, isActive }) => {

    const dispatch = useDispatch();
    //TODO: Validate recordValues are in correct format

    const form = useForm({
        defaultValues: recordValues || {

            plantType: '',
            seedingDateStamp: '',


        },
        onSubmit: async ({ value }) => {
            if(value.id) {
                dispatch(updatePlantData(value))
                    .then(() => {doClose();})
                    .catch((e) => {console.error(e)});
            } else {
                dispatch(writePlantData(value))
                    .then(() => {doClose();})
                    .catch((e) => {console.error(e)});
            }
        },
    });

    return (
        <ReactModal isOpen={isActive} onRequestClose={doClose} ariaHideApp={false} >
        <RootElement
            onSubmit={
            (e) => {
                e.preventDefault()
                form.handleSubmit()
            }
        }>
            <form.Field name="plantType">
                {field => (
                    <div className={"formRow"}>
                        <label>Plant Type</label>
                        <input
                            value={field.state.value}
                            onChange={e => field.handleChange(e.target.value)}
                            type="text"
                            required
                        />
                    </div>
                )}
            </form.Field>

            <form.Field name="seedingDateStamp">
                {field => (
                    <div className={"formRow"}>
                        <label>Seeding Date</label>
                        <input
                            value={field.state.value}
                            onChange={e => field.handleChange(e.target.value)}
                            type="date"
                            required
                        />
                    </div>
                )}
            </form.Field>

            <form.Field name="germinationRate">
                {field => (
                    <div className={"formRow"}>
                        <label>Germination Rate (%)</label>
                        <input
                            value={field.state.value}
                            onChange={e => field.handleChange(Number(e.target.value))}
                            type="number"
                            min="0"
                            max="100"

                        />
                    </div>
                )}
            </form.Field>

            <form.Field name="plantingNumber">
                {field => (
                    <div className={"formRow"}>
                        <label>Planting Number</label>
                        <input
                            value={field.state.value}
                            onChange={e => field.handleChange(Number(e.target.value))}
                            type="number"

                        />
                    </div>
                )}
            </form.Field>

            <form.Field name="plantingDateStamp">
                {field => (
                    <div className={"formRow"}>
                        <label>Planting Date</label>
                        <input
                            value={field.state.value}
                            onChange={e => field.handleChange(e.target.value)}
                            type="date"

                        />
                    </div>
                )}
            </form.Field>

            <form.Field name="firstHarvestDateStamp">
                {field => (
                    <div className={"formRow"}>
                        <label>First Harvest Date</label>
                        <input
                            value={field.state.value}
                            onChange={e => field.handleChange(e.target.value)}
                            type="date"

                        />
                    </div>
                )}
            </form.Field>

            <form.Field name="harvestVolume">
                {field => (
                    <div className={"formRow"}>
                        <label>Harvest Volume (kg)</label>
                        <input
                            value={field.state.value}
                            onChange={e => field.handleChange(parseFloat(e.target.value))}
                            type="number"

                        />
                    </div>
                )}
            </form.Field>
            <div className={"actions"}>
                <CustomButton type="button" color={"secondary"} onClick={doClose}>Cancel</CustomButton>
                <CustomButton type="submit" color={"primary"}>Submit</CustomButton>
            </div>

        </RootElement>
        </ReactModal>
    );
};

const RootElement = styled.form`
    max-width: 300px;
   
    .formRow {
        display: flex;
        flex-wrap: wrap;
        padding: 0.5em;
        
        &:nth-child(even):not(:last-child) {
            background: lightgrey;
        }

        * {
            flex: 1 1 45%; 
            box-sizing: border-box;
        }

    }
    
    .actions {
        margin-top: 2em;
        display: flex;
        flex-direction: row;
        gap: 1em;
        justify-content: flex-end;
    }
     `

export default DataEntryForm;
