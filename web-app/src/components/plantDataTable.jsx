import React, {useState} from 'react';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from '@tanstack/react-table';
import CustomButton from "./button.jsx";
import DataEntryForm from "./dataEntryForm.jsx";
import styled from "styled-components";
import {removePlantData} from "../store/plantSlice.js";
import {useDispatch} from "react-redux";

const PlantingTable = ({ data }) => {

    const dispatch = useDispatch();
    const [recordValues, setRecordValues] = useState(null);

    const columns = [
        { accessorKey: 'plantType', header: 'Plant Type' },
        { accessorKey: 'seedingDateStamp', header: 'Seeding Date' },
        { accessorKey: 'germinationRate', header: 'Germination Rate (%)', cell: info => info.getValue() != null ? info.getValue() : '—', },
        { accessorKey: 'plantingNumber', header: 'Number Planted', cell: info => info.getValue() != null ? info.getValue() : '—', },
        { accessorKey: 'plantingDateStamp', header: 'Planting Date', cell: info => info.getValue() != null ? info.getValue() : '—', },
        { accessorKey: 'firstHarvestDateStamp', header: 'First Harvest Date', cell: info => info.getValue() != null ? info.getValue() : '—', },
        { accessorKey: 'harvestVolume', header: 'Harvest Volume (lbs)', cell: info => info.getValue() != null ? info.getValue() : '—', },
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
        <DataEntryForm isActive={recordValues !== null} doClose={finishEditing} recordValues={recordValues} />
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th
                                key={header.id}
                                style={{ borderBottom: '1px solid #ccc', padding: '8px', textAlign: 'left' }}
                            >
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                        <th style={{ borderBottom: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Actions</th>
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #eee' }}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} style={{ padding: '8px' }}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                        <td class={"actions"}><CustomButton onClick={() => editEntry(row.original)} color={"tertiary"}>Edit</CustomButton><CustomButton onClick={() => deleteEntry(row.original)} color={"tertiary"}>Delete</CustomButton></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </RootElement>
    );
};

const RootElement = styled.div`
    .actions {
        display: flex;
        gap: 1em;
        justify-content: flex-end;
    }

`;

export default PlantingTable;
