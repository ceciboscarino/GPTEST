import React, { useEffect } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';
import { useState } from 'react';
import { Checkbox } from '@mui/material';
import { Person } from '@/models';
import { addFavorites } from '@/redux/states/favorites';
import { useDispatch, useSelector } from 'react-redux';
import { addPeople } from '@/redux/states/people';
export interface HomeProps { }
import store from '@/redux/store';
import { AppStore } from '@/redux/store';
import { PeopleTable } from './components';

const Home: React.FC<HomeProps> = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addPeople(People));
	}, []);
	return (
		<PeopleTable/>
	);
};

export default Home;
