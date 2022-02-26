import React,{useState, useEffect} from 'react';
import '../App.css';
import { Card, CardHeader, CardContent, CardMedia, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { CardActions, TextField,Button } from '@mui/material';
import SummaryCart from './CartSummary';


export default function ShoppingCard(props) { 
  let allProducts = props?.Products;

  const[ProductDetails , updateProduct] = useState([]);

  useEffect(()=>{
    let Products = allProducts.map((element)=>{
      return {...element , quantity:0}
  });
  updateProduct(Products);
  },[allProducts])

  const handleAddOrRemove = (e,action) =>{
    let currentItem = +(e.currentTarget.parentElement.parentElement.id) ;
    let newUpdatedCart = alterCart(currentItem,action);
    console.log(newUpdatedCart);
      updateProduct(newUpdatedCart)
  }

  const alterCart = (currentItem,action) =>{
    return ProductDetails.map((element)=>{
      let updateQuantity = action? element.quantity+1 : element.quantity-1;
      if(element.id === currentItem  && element.quantity>=0){
        return {...element , quantity:updateQuantity}
      }else{
        return {...element}
      }      
    });
  }

  return (
    <>
      {ProductDetails.length > 0 && ProductDetails.map((item,index)=>{
      return (
       
        <Card className='shoppingCardsWrapper' key={item.id} id={item.id}>
        <CardHeader title={item.title.split(' ')[0]}>
        </CardHeader>
        <CardContent>
          <CardMedia
          component="img"
          height="194"
          image={item.image}
          alt={item.description}
        />
          <Typography>Rate: {item.price}</Typography>
        </CardContent>
        <CardActions id={item.id}>
                <Button onClick={(e)=>handleAddOrRemove(e,'add')}><AddCircleOutlineIcon/></Button>
                <TextField id="outlined-basic" label='no. of products' value={item.quantity} variant="outlined"/>
                <Button onClick={(e)=>handleAddOrRemove(e)}><RemoveCircleOutlineIcon/></Button>
          </CardActions>
        
      </Card>
    
      )
    })}

    <SummaryCart updatedCart ={ProductDetails}/>
    </>

  );
}