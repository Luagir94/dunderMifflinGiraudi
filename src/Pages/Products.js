import React,{useState,useEffect,useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ItemListConteiner from '../Components/ItemListConteiner';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';







export default function Products() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
    
  const classes = useStyles();

const getProducts = async() =>{
  const response = await fetch("https://60dc604ec2b6280017feb95c.mockapi.io/articles");
  const data = await response.json();
  setItems(data);
  setIsLoaded(true);
};


  useEffect(() => {
    
    getProducts();
    
   }, [])

  if (!isLoaded) {
    return(<Backdrop className={classes.backdrop} open >
      <CircularProgress color="inherit" />
  </Backdrop>)
  } else {
    return (
      <main>
        <Container  maxWidth="md">
          <Grid container spacing={0}>
            {items.map((data) => (
              <Grid item key={data.id} xs={12} sm={6} md={4}>
                <ItemListConteiner name={data.name} img={data.img} id={data.id}
                stock={data.stock} price={data.precio}/>
              </Grid> 
            ))}
          </Grid>
        </Container>
      </main>
    );
  }


}
