import React,{useEffect,useState} from 'react';
import ShoppingCard from './ShoppingCard';
import '../App.css';



const Cart =()=>{
    const [Products,setProducts]=useState([]);


    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{
                    setProducts(json);
        });            
        
    },[])

    return(
        <div className='cartBg'>
            <div className='Products'>
            <ShoppingCard Products={Products}/>
            </div>           
        </div>
    )
}

export default Cart;