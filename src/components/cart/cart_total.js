import DeliverySwitch from './delivery_switch';
import { useState } from "react";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCart } from '../../providers/cart_provider';
import { useProduct } from '../../providers/product_provider';
import { loadStripe } from '@stripe/stripe-js';


function CartTotal(){
    const [isExpress, setIsExpress] = useState(false);
    const [ deliveryCost, setDeliveryCost ] = useState(0.00);
    const [ discountCost, setDiscountCost ] = useState(0.00)
    const handleExpressChange = (expressValue) => {
        setIsExpress(expressValue);
        handleDeliveryCost(expressValue);
    };

    const { cartProducts } = useCart()
    console.log(cartProducts)
    const { storeProducts } = useProduct()
    const handleDeliveryCost = (value) => {
        value ? setDeliveryCost(9.99) : setDeliveryCost(0.00);
    }

    const formatDate = () =>{
        const currentDate = new Date();
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + (isExpress ? 7 : 14) )
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        const weekday = weekDays[date.getDay()]
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        return `${weekday}, ${month} ${day}, ${year}`;
    }

    const subTotal = cartProducts.reduce((total, cartItem) => {
        const item = storeProducts.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
      }, 0)
     
    const tax = cartProducts.reduce((total, cartItem) => {
        const item = storeProducts.find(i => i.id === cartItem.id)
        return total + ((item?.price || 0) *.15) * cartItem.quantity
      }, 0)
    const formattedTax = Number(parseFloat(tax).toFixed(2))
    const total = subTotal + deliveryCost - discountCost + formattedTax

    const handleSubmit = async () =>{
        try {
            const stripe = await loadStripe("pk_test_51OHIOsDAGzMNj4W5uwIIqStOW0AdV8Ke3Mtfq2by6u7AApmm1P6TU2s43V2NaW3kGWyhsX1sEhA7BjXrkOsO0kh300rhQtNoVB")
            // Make a POST request to the specified endpoint
            const response = await fetch('http://localhost:3001/checkout',
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({cartProducts: cartProducts, shipping: deliveryCost})
                }
            )
            
            const session = await response.json()
            const result = stripe.redirectToCheckout({sessionId: session.session})
            // Handle the response as needed
            if(result.error){
                console.error(result.error)
            }
            // You can perform additional actions based on the response if necessary
        
          } catch (error) {
            // Handle errors
            console.error('Error:', error);
            // You can perform error handling based on the type of error if needed
          }
    }

    return (
        <div className="[ cart-total ][ flex flex-col ][ px-[20px] py-[20px] ][ ml-[50px] ][ rounded-[15px] ][ z-[1] ][ w-[300px] h-[575px] ][ border-2 border-solid border-[#D3D3D3] ][ bg-white ]">
            <p className={`[ delivery-txt ][ text-[20px] text-left ][ mb-[10px] ][ font-[Pacifico] font-normal text-[#404040] ] ${ cartProducts.length === 0 ? 'mb-[10px]': ''}`}>Delivery</p>
            <DeliverySwitch onExpressChange={handleExpressChange} />
            {
                cartProducts.length > 0 &&
                <div className='[ delivery-date-section ][ flex flex-row ][ mb-[30px] ]'>
                    <p className='[ delivery-date-label ][ font-[Roboto] ][ mr-[5px] ][ text-[14px] text-[#888888] ]'>Delivery date:</p>
                    <p className='[ delivery-date-txt ][ font-[Roboto] ][ text-[14px] text-[#888888] ]'>{formatDate()}</p>
                </div>
            }
            <div className={`[ promo-area ][ h-[120px] w-full ][ border-y-2 border-[#BEBEBE] border-dashed ][ py-[20px] ] ${ cartProducts.length === 0 ? 'mt-[10px]': 'mt-[0px]'}`}>
                <div className='[ promo-code-section ][ w-full h-[40px] ][ border-[2px] border-solid border-[#B8B8B8] ][ rounded-[10px] ][ mb-[5px] ][ flex flex-row ]'>
                    <input className="[ promo-code-input ][ rounded-[10px] ][ w-[75%] ][ px-2 ][ outline-none ][ font-[Lobster] ]" type='text' placeholder="PromoCode" />
                    <div className='[ apply-btn ][ h-full [ w-[25%] ][ rounded-[10px] ][ border-l-[2px] border-solid border-[#B8B8B8] ][ hover:bg-[#DCDCDC] ]'>
                        <p className='[ apply-txt ][ mt-[4px] ][ text-center font-[Lobster] text-[18px] text-[#484848] font-semibold ][ cursor-pointer ]'>Apply</p>
                    </div>
                </div> 
                <p className='[ discount-txt ][ text-left ][ font-[Roboto] ][ text-[14px] text-[#888888] ]'>20% off Discount</p> 
            </div>
            <div className='[ subtotal-section ][ py-[20px] ][ border-b-2 border-[#BEBEBE] border-dashed ]'>
                <div className='[ subtotal-line ][ flex flex-row ][ justify-between ]'>
                    <p className='[ subtotal-label ][ text-[18px] font-[Roboto] text-[#404040] ]'>Subtotal</p>
                    <p className='[ subtotal-txt ][ text-[18px] font-[Pacifico] text-[#404040] ]'>${parseFloat(subTotal).toFixed(2)}</p>
                </div>
                <div className='[ discount-line ][ mt-2 ][ flex flex-row ][ justify-between ]'>
                    <p className='[ discount-label ][ text-[#888888] text-[14px] font-[Roboto] ]'>Discount</p>
                    <p className='[ discount-txt ][ text-[#888888] text-[14px] font-[Pacifico] ]'>${parseFloat(discountCost).toFixed(2)}</p>
                </div>
                <div className='[ delivery-line ][ mt-2 ][ flex flex-row ][ justify-between ]'>
                    <div className='[ delivery-label-section ][ flex flex-row ]'>
                        <p className='[ delivery-label ][ text-[#888888] text-[14px] font-[Roboto] ]'>Delivery</p>
                        <FontAwesomeIcon className='[ my-auto ml-1 ]' icon={faCircleInfo} style={{color: "#888888",}} />
                    </div>
                    <p className='[ delivery-txt ][ text-[#888888] text-[14px] font-[Pacifico] ]'>{`$${deliveryCost}`}</p>
                </div>
                <div className='[ tax-line ][ mt-2 ][ flex flex-row ][ justify-between ]'>
                <div className='[ tax-label-section ][ flex flex-row ]'>
                        <p className='[ tax-label ][ text-[#888888] text-[14px] font-[Roboto] ]'>Tax</p>
                        <FontAwesomeIcon className='[ my-auto ml-1 ]' icon={faCircleInfo} style={{color: "#888888",}} />
                    </div>
                    <p className='[ tax-txt ][ text-[#888888] text-[14px] font-[Pacifico] ]'>${parseFloat(tax).toFixed(2)}</p>
                </div>
            </div>
            <div className='[ total-section ][ mt-[15px] ][ flex flex-row ][ justify-between ]'>
                <p className='[ total-label ][ my-auto ][ text-[20px] font-[Roboto] text-[#404040] font-bold ]'>Total</p>
                <p className='[ total-txt ][ my-auto ][ text-[20px] font-[Pacifico] text-[#404040] font-bold ]'>${parseFloat(total).toFixed(2)}</p>
            </div>
            <button onClick={() => handleSubmit()} className='[ proceed-btn ][ w-full h-[35px] ][ bg-[#FFA33C] hover:bg-[#F3B664] ][ rounded-[5px] ][ cursor-pointer ][ mt-[10px] ]'>
                <p className='[ proceed-txt ][ mt-[3px] ][ text-[18px] text-white font-[Lobster] ]'>Proceed To Checkout</p>
            </button>
            <a href='/' className='[ continue-btn ][ w-full h-[35px] ][ mt-[10px] ][ cursor-pointer ][ rounded-[5px] ][ border-2 border-solid border-[#D3D3D3] ][ hover:bg-[#DCDCDC] hover:border-[#DCDCDC] ]'>
                <p className='[ continue-txt ][ mt-[3px] ][ text-[18px] text-[#808080] font-[Lobster] ]'>Continue Shopping</p>
            </a>
        </div>
    );
}

export default CartTotal;