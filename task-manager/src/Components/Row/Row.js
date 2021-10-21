import { Checkbox } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import React from 'react'

import './Row.css'

// const columns = [
//     { field: 'name', headerName: 'Customer Name', width: 158 },
//     { field: 'id', headerName: 'Customer #', width: 130 },
//     { field: 'invoice', headerName: 'Invoice #', width: 130 },
//     {
//         field: 'amount',
//         headerName: 'Invoice Amount',
//         type: 'number',
//         width: 170,
//     },
//     {
//         field: 'duedate',
//         headerName: 'Due Date',
//         width: 160,
//     },
//     {
//         field: 'paymentdate',
//         headerName: 'Predicted Payment Date',
//         width: 180,
//     },
//     {
//         field: 'agingBucket',
//         headerName: 'Predicted Aging Bucket',
//         width: 160,
//     },
//     {
//         field: 'notes',
//         headerName: 'Notes',
//         width: 120,
//     },
// ];


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, id, invoice, amount, duedate, paymentDate, agingBucket, notes) {
    return { name, id, invoice, amount, duedate, paymentDate, agingBucket, notes };
}

const rows = [
    createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
        color: '#97A1A9'
    },
});

const Row = ({ name, id, invoice, amount, duedate, paymentDate, agingBucket, notes }) => {
    const classes = useStyles();

    return (
        <div className='row'>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell>Customer Name</StyledTableCell>
                            <StyledTableCell align="right">Customer #</StyledTableCell>
                            <StyledTableCell align="right">Invoice #</StyledTableCell>
                            <StyledTableCell align="right">Invoice Amount</StyledTableCell>
                            <StyledTableCell align="right">Due Date</StyledTableCell>
                            <StyledTableCell align="right">Predicted Payment Date</StyledTableCell>
                            <StyledTableCell align="right">Predicted Aging Bucket</StyledTableCell>
                            <StyledTableCell align="right">Notes</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.id}</StyledTableCell>
                                <StyledTableCell align="right">{row.invoice}</StyledTableCell>
                                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                <StyledTableCell align="right">{row.duedate}</StyledTableCell>
                                <StyledTableCell align="right">{row.paymentDate}</StyledTableCell>
                                <StyledTableCell align="right">{row.agingBucket}</StyledTableCell>
                                <StyledTableCell align="right">{row.notes}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Row
