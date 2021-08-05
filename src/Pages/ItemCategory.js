import React,{useState,useEffect,useContext} from 'react';
import {useParams} from 'react-router-dom'
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
import { getFirestore } from '../firebase';
import { Category } from '@material-ui/icons';





export default function ItemCategory(category) {
  const {categoryId} = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: 'rgb(21, 56 , 78)',

    },
  }));


  const classes = useStyles();
  const filterProducts = () => {
    const db = getFirestore();
    const itemCollection = db.collection("productos")
    .where("category", "==", `${categoryId}`)
    return itemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0){
            console.log('no results')
        } else {
            setItems(querySnapshot.docs.map(doc => doc.data()))
            setIsLoaded(true)
        }
    }).catch(error => {
        console.log('error ->', error)
    })
}

useEffect(() => {
  filterProducts()
 }, [categoryId])
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
                stock={data.stock} price={data.price}/>
              </Grid> 
            ))}
          </Grid>
        </Container>
      </main>
    );
  }


}
