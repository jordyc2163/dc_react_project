import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { serverCalls } from '../../api';
import { useGetDataHeroes, useGetDataVillains } from '../../custom-hooks';
import { CharForm } from '../../components';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'alias',
    headerName: 'Alias',
    width: 150,
  },
  {
    field: 'first_name',
    headerName: 'First Name',
    width: 110,
  },
  {
    field: 'last_name',
    headerName: 'First Name',
    width: 110,
  },
  {
    field: 'bio',
    headerName: 'Background',
    width: 300,
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 110,
  },
  {
    field: 'origin',
    headerName: 'First Appearance',
    width: 200,
  },
  {
    field: 'power',
    headerName: 'Abilities',
    width: 110,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 300,
  },

];

interface gridData {
  data: {
    id?: string;
    name?: string;
  }
}
export const DataTableHero = () => {
  let { heroData, getHeroData } = useGetDataHeroes();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = async () => {
    await serverCalls.deleteHero(`${gridData[0]}`)
    getHeroData();
  }

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <h2> Heroes in Your Arsenal</h2>
      <DataGrid
        rows={heroData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={newSelectionModel => setData(newSelectionModel)}
        {...heroData}
      />
      <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Your Hero</DialogTitle>
          <DialogContent>
            <DialogContentText>Character id: {gridData[0]}</DialogContentText>
              <CharForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
          </DialogActions>
        </Dialog>
    </Box>
  )
}

export const DataTableVillain = () => {
  let { villainData, getVillainData } = useGetDataVillains();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = async () => {
    await serverCalls.deleteVillain(`${gridData[0]}`)
    getVillainData();
  }

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <h2> Villains in Your Arsenal</h2>
      <DataGrid
        rows={villainData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={newSelectionModel => setData(newSelectionModel)}
        {...villainData}
      />
      <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Your Villain</DialogTitle>
          <DialogContent>
            <DialogContentText>Character id: {gridData[0]}</DialogContentText>
              <CharForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
          </DialogActions>
        </Dialog>
    </Box>
  )
}