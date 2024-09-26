import React, { useContext} from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext.jsx';
const FoodItem = ({item}) => {
      // const item = props.item;
      const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

      return (
         <div className='food-item'>
            <div className='food-item-img-container'>
               <img className='food-item-image' src={`${url}/images/${item.image}`} />
               {!cartItems[item._id]?<img onClick={()=>addToCart(item._id)} className='add' src={assets.add_icon_white}/>:
                  <div className='food-item-counter'>
                     <img src={assets.remove_icon_red} onClick={()=>removeFromCart(item._id)}/>
                     <p>{cartItems[item._id]}</p>
                     <img src={assets.add_icon_green} onClick={()=>addToCart(item._id)}/>
                  </div>
               }
            </div>
            <div className='food-item-info'>
               <div className='food-item-name-rating'>
                  <p>{item.name}</p>
                  <img src={assets.rating_starts}></img>
               </div>
               <p className='food-item-des'>{item.description}</p>
               <p className='food-item-price'>${item.price}</p>
            </div>
            

         </div>
      )
}

export default FoodItem;
