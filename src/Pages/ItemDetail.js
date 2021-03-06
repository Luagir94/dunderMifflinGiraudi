import React,{useState,useEffect,useContext} from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Components/Item';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { getFirestore } from '../firebase';
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
          color: 'rgb(21, 56 , 78)',
        },
      }));

      const itemDetail = () => {
        console.log(productId)
        const db = getFirestore();
        const itemCollection = db.collection("productos")
        .where("name", "==", productId)
        return itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results')
            } else {
              setItem(querySnapshot.docs.map(doc => doc.data())[0])
              setIsLoaded(true)
            }
        }).catch(error => {
            console.log('error ->', error)
        })
    }
    console.log(item)
    const classes = useStyles();
    useEffect(() => {
      itemDetail()
      
      
     }, [productId])
       if (!isLoaded) {
        return(<Backdrop className={classes.backdrop} open >
          <CircularProgress color="inherit" />
      </Backdrop>)
      } else {
    return(
        <>      <div style={divStyle}>
                <Item name={item.name} img={item.img} id={item.id}
                stock={item.stock} description={item.description} price={item.price}/>
                </div>
        </>
    )}
}