import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import './Dashboard.scss'
import TablePagination from "@material-ui/core/TablePagination";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../actions/products.action";
import {appConstant} from "../../appConstants/appConstants";
import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const columns = [
    { id: 'id', label: 'ID',align: 'left', minWidth: 10 },
    { id: 'name', label: 'Name',align: 'left', minWidth: 170 },
    { id: 'price', label: 'Price',align: 'right', minWidth: 100 },//\u00a0
    { id: 'color', label: 'Color',align: 'right', minWidth: 100 },
    { id: 'size', label: 'Size',align: 'right', minWidth: 100 },
    { id: 'brand', label: 'Brand',align: 'right', minWidth: 100 },
    { id: 'stock', label: 'Stock',align: 'right', minWidth: 100 },
    // {
    //     id: 'population',
    //     label: 'Population',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => value.toLocaleString('en-US'),
    // }
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 3000,
    },
});


const Dashboard=(props)=>{

    const dispatch = useDispatch();

    React.useEffect(()=>{
        !loginState.products&&dispatch(getProducts());
    },[])

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const loginState = useSelector(appState => {
        return {
            products:appState.products,
        };
    });

    const [search,setSearch]=useState("")
    const handleSearch=(event)=>{
        setSearch(event.target.value);
    }
    const [products,setProducts]=useState({
        items:loginState.products
    })
    useEffect(()=>{
        setProducts({
            items:loginState.products
        });
    },[loginState.products])

    useEffect(()=>{
        let newProducts=products.items&&loginState.products.filter(p=>{
             if(p.name.toLocaleLowerCase().indexOf(search)>-1){
                 return p;
             }
        })
        setProducts({
            items:newProducts
        });
    },[search])


    return (
        <div className='dashboard'>
            <Grid container className='search'>
                <Grid item lg={7} >
                    <TextField id="outlined-basic"
                               label="Search Product"
                               name='image3'
                               variant="outlined"
                               className='input'
                               onChange={handleSearch}
                               value={search}
                    />
                </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.items&&products.items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
                                return (
                                    //
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (column.id==='name'?
                                                    <TableCell key={column.id} align={column.align}>
                                                        <Link to={`${appConstant.editProductRoute}/${row.id}`}>
                                                            {value}
                                                        </Link>
                                                    </TableCell>
                                                    :
                                                    <TableCell key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                    // </Link>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[15, 25, 100]}
                    component="div"
                    count={loginState.products?loginState.products.length:0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>

    );
}

export default Dashboard;