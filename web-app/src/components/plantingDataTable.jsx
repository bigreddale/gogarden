import React, {useState} from 'react';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from '@tanstack/react-table';
import CustomButton from "./button.jsx";
import PlantingEntryForm from "./plantingEntryForm.jsx";
import styled from "styled-components";
import {removePlantData} from "../store/plantSlice.js";
import {useDispatch} from "react-redux";

const PlantingDataTable = ({data}) => {

    const dispatch = useDispatch();
    const [recordValues, setRecordValues] = useState(null);

    const columns = [
        {accessorKey: 'plantType', header: 'Plant Type'},
        {accessorKey: 'seedingDateStamp', header: 'Seeding Date'},
        {
            accessorKey: 'germinationRate',
            header: 'Germination Rate (%)',
            cell: info => info.getValue() != null ? info.getValue() : '—',
        },
        {
            accessorKey: 'plantingNumber',
            header: 'Number Planted',
            cell: info => info.getValue() != null ? info.getValue() : '—',
        },
        {
            accessorKey: 'plantingDateStamp',
            header: 'Planting Date',
            cell: info => info.getValue() != null ? info.getValue() : '—',
        },
        {
            accessorKey: 'firstHarvestDateStamp',
            header: 'First Harvest Date',
            cell: info => info.getValue() != null ? info.getValue() : '—',
        },
        {
            accessorKey: 'harvestVolume',
            header: 'Harvest Volume (lbs)',
            cell: info => info.getValue() != null ? info.getValue() : '—',
        },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const finishEditing = () => {
        setRecordValues(null);
    }

    const editEntry = (data) => {
        setRecordValues(data);
    }

    const deleteEntry = (data) => {
        dispatch(removePlantData(data));
    }

    return (
        <RootElement>
            {recordValues !== null && <PlantingEntryForm isActive doClose={finishEditing} recordValues={recordValues}/>}
            <div>
                <table>
                    <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.column.columnDef.header}
                                </th>
                            ))}
                            <th>Actions</th>
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {cell.getValue()}
                                </td>
                            ))}
                            <td className={"actions"}>
                                <CustomButton onClick={() => editEntry(row.original)}
                                              color={"tertiary"}>Edit</CustomButton>
                                <CustomButton onClick={() => deleteEntry(row.original)}
                                              color={"tertiary"}>Delete</CustomButton>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </RootElement>
    );
};

const RootElement = styled.div`
    min-width: 600px;

    table {
        width: 100%;
        border-collapse: collapse;

        th {
            border-bottom: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }

        tr {
            border-bottom: 1px solid #eee;
        }

        td {
            padding: 8px;
        }
    }

    .actions {
        display: flex;
        gap: 0.5em;
        padding: .5em;

        button {
            font-size: 0.7rem;
            padding: 0.4rem;
        }
    }

`;

export default PlantingDataTable;
