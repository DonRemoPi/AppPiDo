import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {App} from './components/App';
import { Home } from '../pages/Home';



export default function Index() {
  return (
    <div>
        {/* <App/> */}
        <Home />
    </div>
  );
}