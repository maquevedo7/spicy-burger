import style from './Cart.module.css'
import Product from '../Product/Product'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import Purchase from '../Purchase/Purchase'
import './Cart.css'


const Cart = () => {

    const { cart,increase,reduction,removeProduct,total,getTotal } = useContext
    (AppContext);
    
  useEffect(() => {
    getTotal()
  }, [])

//   if(cart.length === 0){
//     return (<h2 style={{textAlign:"center", paddingTop:'80px'}}>Tu carrito está vacío</h2>)
//   }else{
//      return (

//         <p>añadido</p>
//     )
if(cart.length === 0){
    return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
}else{
    return (
        <>
            {
                cart.map(item =>(
                    <div className="details cart" key={item._id}>
                        <img src={item.src} alt=""/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.name}</h2>
                                <span>${item.price * item.count}</span>
                            </div>
                            
                            <p>{item.ingredients}</p>
                            
                            <div className="amount">
                                <button className="count" onClick={() => reduction(item._id)}> - </button>
                                <span>{item.count}</span>
                                <button className="count" onClick={() => increase(item._id)}> + </button>
                            </div>
                        </div>
                        <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                    </div>
                ))
            }
            
        </>
        )
    }

}

export default Cart



// import '../css/Details.css'
// import '../css/Cart.css'

// //export class Cart extends Component {
//     //static contextType = DataContext;
//     const Cart = () => {
//     const { cart,increase,reduction,removeProduct,total,getTotal } = useContext(DataContext);
    
//     // componentDidMount() {
//     //     this.context.getTotal();
//     // }

//     useEffect(() => {
//         getTotal()
//     }, [])
    
//      //render() {
//        //  const {cart,increase,reduction,removeProduct,total} = this.context;
//          if(cart.length === 0){
//             return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
//         }else{
//             return (
//                 <>
//                     {
//                         cart.map(item =>(
//                             <div className="details cart" key={item._id}>
//                                 <img src={item.src} alt=""/>
//                                 <div className="box">
//                                     <div className="row">
//                                         <h2>{item.title}</h2>
//                                         <span>${item.price * item.count}</span>
//                                     </div>
//                                     <Colors colors={item.colors}/>
//                                     <p>{item.description}</p>
//                                     <p>{item.content}</p>
//                                     <div className="amount">
//                                         <button className="count" onClick={() => reduction(item._id)}> - </button>
//                                         <span>{item.count}</span>
//                                         <button className="count" onClick={() => increase(item._id)}> + </button>
//                                     </div>
//                                 </div>
//                                 <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
//                             </div>
//                         ))
//                     }
//                     <div className="total">
//                         <Link to="/payment">Payment</Link>
//                         <h3>Total: ${total}</h3>
//                     </div>
//                 </>
//                 )
//             }
//         }
    


// export default Cart