import React,{useState,useEffect} from 'react';
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
import ItemListConteiner from './ItemListConteiner';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '120%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'red,'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));



function ProductGrid() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
    
  const classes = useStyles();




  useEffect(() => {
  fetch("https://60dc604ec2b6280017feb95c.mockapi.io/articles")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        }
      )
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
                stock={data.stock} description={data.descripcion} price={data.precio}/>
              </Grid> 
            ))}
          </Grid>
        </Container>
      </main>
    );
  }

  /*return (
    
      
      

  )*/
}
export default ProductGrid