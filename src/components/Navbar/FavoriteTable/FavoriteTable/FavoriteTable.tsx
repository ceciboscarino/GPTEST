import { Person } from '@/models';
import { AppStore } from '@/redux';
import { addFavorites } from '@/redux/states/favorites';
import { Checkbox } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
export interface FavoriteTableProps {}

const FavoriteTable : React.FC<FavoriteTableProps> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
	const pageSize = 5;
	
	const stateFavorites = useSelector((store: AppStore) => store.favorites);
	const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id)
	const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id)

	const handleChange = (person: Person) => {

		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
		dispatch(addFavorites(filteredPeople));
		setSelectedPeople(filteredPeople);
	};

	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{
				<Checkbox
					size="small"
					checked={findPerson(params.row)}
					onChange={() => handleChange(params.row)} />
			}</>
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
export default FavoriteTable;
function useSelector(arg0: (store: AppStore) => Person[]) {
	throw new Error('Function not implemented.');
}

function dispatch(arg0: { payload: any; type: "favorites/addFavorites"; }) {
	throw new Error('Function not implemented.');
}

