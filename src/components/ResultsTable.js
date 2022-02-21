import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { LocationSearching } from '@material-ui/icons';

const columns = [
    { field: 'name', headerName: 'Place', width: 130 },
    {
        field: 'open',
        valueGetter: params => params.row.opening_hours.open_now ? "open" : "closed",
        headerName: 'Open',
        width: 80
    },
    {
        field: 'rating',
        headerName: 'Rating',
        type: 'number',
        width: 90,
    },
    {
        field: 'vicinity',
        headerName: 'Address',
        width: 300,
    }
];



export default function DataTable() {
    const locations = useSelector((state) => {
        return state.locations
    })
    return (
        <div className='help' style={{ height: 400, width: '40%', paddingTop: '50px', paddingLeft: '50px' }}>
            <DataGrid
                rows={locations}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowId={l => l.place_id}

            />
        </div>
    );
}
