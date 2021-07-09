import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { buycake, buyIceCream, addcakeByinc} from './Slice';
export default function Shop(){
    const {numOfCakes, numOfIceCreams} = useSelector((state) => state.shopReducer);
    //const numOfCakes = useSelector((state) => state.shopReducer.numOfCakes);
    const dispatch = useDispatch();

     return(
         <div className="Shop">
             <h1> The number of Cakes is: {numOfCakes}</h1>
             <button onClick={()=>dispatch(buycake())}>Buy Cake</button>
             <h1> The number of Icecreams is: {numOfIceCreams}</h1>
             <button onClick={()=>dispatch(buyIceCream())}>Buy Icecream</button>
             <h1>Buy extra 10 cakes: {numOfCakes}</h1>
             <button onClick={()=>dispatch(addcakeByinc(10))}>Buy Icecream</button>
         </div>
     )
}
