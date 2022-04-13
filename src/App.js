import React from 'react';
import './App.css';
import ReactPlayer from 'react-player'
import {Grid} from "@mui/material"
function App() {
  return (
    
     <Grid  container className="App" >
        
          <Grid item md={12} sm={12}  xs={12}  >
          <ReactPlayer  controls url='https://youtu.be/JKa05nyUmuQ'/>
          </Grid>
          
          
        
        </Grid>
        
      
      
    
  );
}

export default App;
