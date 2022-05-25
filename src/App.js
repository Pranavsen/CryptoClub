
import { makeStyles } from '@material-ui/core';
import './App.css';
import Header from "./componemts/Header";
import Homepage from "./Pages/Homepage";


  const useStyles = makeStyles({
    App: {
        backgroundColor:"#14161a",
        color:"white",
        minHeight:"100vh",
    },
  });
  
  function App() {
  const classes = useStyles();

  return (
    <div className={classes.App} >
    <Header />
    <Homepage />
    </div>
    
  );
}

export default App;
