import { People } from '@/data/people';
import { Person } from '@/models';
import { AppStore } from '@/redux/store';
import { addFavorites } from '@/redux/states/favorites';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
export interface PeopleTableProps { }

const PeopleTable: React.FC<PeopleTableProps> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
	const pageSize = 5;
	
	const statePeople = useSelector((store: AppStore) => store.people);
	const favoritePeople = useSelector((store: AppStore) => store.favorites);
	const findPerson = (person: Person) => !!favoritePeople.find(p => p.id === person.id)
	const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id)
	const dispatch = useDispatch();
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
		} ,
		{
			field: 'levelOfHappiness',
			headerName: 'Level of Happiness',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}
	];

	useEffect(() => {
		setSelectedPeople(favoritePeople);
	},[favoritePeople]);




	return <DataGrid

		rows={People}
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

export default PeopleTable;

