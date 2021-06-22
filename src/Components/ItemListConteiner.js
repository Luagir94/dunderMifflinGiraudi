import React from 'react';
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
import ItemCount from './ItemCount';
import DATA from './Item';
import CardActionArea from '@material-ui/core/CardActionArea';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(5),
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
    height: '100%',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const datos = DATA


export default function Album() {
  const classes = useStyles();

  return (datos.map((producto)=>(
    <>
    <Card className={classes.root} key={producto.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={producto.nombre}
          height="200"
          image={producto.foto}
          title={producto.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {producto.nombre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {producto.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>

    <ItemCount/>
    </>
  )
    
  )
  );
}

