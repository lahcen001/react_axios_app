import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Save from '@material-ui/icons/Save';
import Delete from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import {green , orange} from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AppBar from  '@material-ui/core/AppBar';
import Toolbar from  '@material-ui/core/Toolbar';
import IconButton from  '@material-ui/core/IconButton';
import DeleteIcon from  '@material-ui/icons/Delete';
import MenuIcon from  '@material-ui/icons/Menu';



import FormControllabel from '@material-ui/core/FormControllabel';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root :{
  
    border :1,
    borderRadius :15,
    color :'orange',
    padding :'5 30px'

  }
})
const theme =  createMuiTheme({
  typography:{
    h2:{
      fontSize:18
    }
  },
  palette:{
    primary:{
      main:green[500],
    },
    secondary:{
      main:orange[500],
    },
  }
})


function ButtonStyled(){
  const classes =useStyles();
  return <Button className={classes.root} >Test Styled Buttons</Button>
}

function CheckboxExample(){
  const [checked, setChecked] = React.useState(true)
  console.log(checked)
  return(
    <div>
     
    <FormControllabel
   control={ <Checkbox 
    checked = {checked}
    onChange={(e)=>setChecked(e.target.checked)}
    color="primary"
    inputProps={{
      'arai-label': 'secondary checkbox'
    }}
    />}
    label="Testing Checkbox"
    />
   
    </div>
)
}


function App() {
  return (
    
    
      <Container maxWidth="sm">
<AppBar>
  <Toolbar>
    <IconButton>
      <MenuIcon/>
      <IconButton/>
menu
    </IconButton>
    <Button>
      Login
    </Button>
  </Toolbar>
</AppBar>


      <TextField
     // variant="outlined"
      color="secondary"
      type="email"
      placeholder="lahcen0000lh@gmail.com"
      
      />
      <br/>
       <TextField
     // variant="outlined"
      color="secondary"
      type="date"
      
      />
      <br/>
       <TextField
     // variant="outlined"
      color="secondary"
      type="time"
      />
      <CheckboxExample/>
      <ButtonStyled/>
      <ButtonGroup>
      <Button 
      startIcon={<Save/>}
     size="small"
     style={{
       fontSize:24
     }}
     variant="contained"
     color="primary"
    
     > HELLO WORLD</Button>
        <Button 
      startIcon={<Save/>}
     size="small"
     style={{
       fontSize:24
     }}
     variant="contained"
     color="secondary"
    
     > Discard</Button>
      <Button 
      startIcon={<Delete/>}
     size="small"
     style={{
       fontSize:24
     }}
     variant="contained"
     color="info"
    
     > Save</Button>
     </ButtonGroup>
     <Grid container spacing={1} justify="center">
     <Grid item md="12" sm="6" >
       <Paper style={{height:75, width:100}}>dsdfsdf</Paper>
     </Grid>
     <Grid item>
       <Paper style={{height:75, width:75,}}>dsdfsdf</Paper>
     </Grid>
     <Grid item>
       <Paper style={{height:75, width:75,}}>dsdfsdf</Paper>
     </Grid>
     <Grid item>
       <Paper style={{height:75, width:75,}}>dsdfsdf</Paper>
     </Grid>
     <Grid item>
       <Paper style={{height:75, width:75,}}>dsdfsdf</Paper>
     </Grid>
     </Grid>

     
     </Container>
  
  );
}

export default App;
