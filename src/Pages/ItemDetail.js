import React,{useState,useEffect,useContext} from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Components/Item';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const divStyle ={
    width: '100%',
    height:'75vh',

   
  }

export default function ItemDetail(){
    const {productId} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);
    const useStyles = makeStyles((theme) => ({
        backdrop: {
          zIndex: theme.zIndex.drawer + 1,
          color: '#fff',
        },
      }));
      
    const classes = useStyles();
    const getProducts = async() =>{
        const response = await fetch(`https://60dc604ec2b6280017feb95c.mockapi.io/articles/${productId}`);
        const data = await response.json();
        setItem(data);
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
    return(
        <>      <div style={divStyle}>
                <Item name={item.name} img={item.img} id={item.id}
                stock={item.stock} description={item.descripcion} price={item.precio}/>
                </div>
        </>
    )}
}