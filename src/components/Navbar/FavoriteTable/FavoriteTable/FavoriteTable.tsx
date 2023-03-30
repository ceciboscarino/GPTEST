import { Person } from '@/models';
import { AppStore } from '@/redux/store';
import { removeFavorites } from '@/redux/states/favorites';
import { Checkbox } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
export interface FavoriteTableProps { }





const FavoritesTable: React.FC<FavoriteTableProps> = () => {
	const pageSize = 5;
	const dispatch = useDispatch();

	const stateFavorites = useSelector((store: AppStore) => store.favorites);


	const handleClick = (person: Person) => {
				dispatch(removeFavorites(person));
	};

	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>
				{<IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
					<Delete />
				</IconButton>}
			</>
		},
				{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		} ,
		{
			field: 'levelOfHappiness',
			headerName: 'Level of Happiness',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}
	];
	return <DataGrid
		rows={stateFavorites}
		columns={columns}
		disableColumnSelector
		disableRowSelectionOnClick
		autoHeight
		initialState={{
			pagination: {
				paginationModel: {
					pageSize: 5,
				},
			},
		}}
		pageSizeOptions={[5]}
		getRowId={(row: any) => row.id}
	/>;
};


export default FavoritesTable;