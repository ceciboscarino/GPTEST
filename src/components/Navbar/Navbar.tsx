import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable/FavoriteTable';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { dialogOpenSubject$ } from './../CustomDialog/CustomDialog';
export interface NavbarProps {}

const Navbar : React.FC<NavbarProps> = () => {
	const handleClick = () => {
		dialogOpenSubject$.setSubject = true;
	}

	return (<>
	
	<CustomDialog>
		<FavoriteTable/>
	</CustomDialog>
	<AppBar position="fixed">
	<Toolbar>
	 
	  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
		Aplicacion Prueba
	  </Typography>
	  <IconButton color="secondary" aria-label="favorites" component="label" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
	</Toolbar>
  </AppBar>
	</>
   )
};

export default Navbar;
