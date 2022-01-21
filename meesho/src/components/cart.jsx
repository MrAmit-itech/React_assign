import { useEffect } from "react"
import { useState } from "react"
import "./cart.css" 

export const Cart=()=>{
    
    var flag2 = false

    if(JSON.parse(localStorage.getItem("cart")) == null){
        localStorage.setItem("cart",JSON.stringify([]))
    }
    var cart = JSON.parse(localStorage.getItem("cart"))

    

    var obj ={
        name:"shampoo",
        price:223,
        size:"free",
        img:'https://meesho.com/_next/image?url=https%3A%2F%2Fimages.meesho.com%2Fimages%2Fproducts%2F72018871%2Facx6w_512.jpg&w=1920&q=75'
    }

    if(cart.length == 0){
        cart.push(obj)
        localStorage.setItem('cart',JSON.stringify(cart))
    }

    const getdata = JSON.parse(localStorage.getItem('cart'))
    console.log(getdata)

    const{price,name,size,img}=getdata[0]
    
    const [count,setCount] = useState(1)
    const[newprice,setNewprice] = useState(price)

    const Handledecrement=(e)=>{
        e.preventDefault()
        if(count>1){
            setCount((p)=>p-1)
            setNewprice((p)=>p-price)
        }
    }
    const HandleIncrement=(e)=>{
        e.preventDefault()
        if(count<4){
            setCount((p)=>p+1)
            setNewprice((p)=>p+price)
        }
    }

    
    

    const Handleclick=()=>{
        console.log('im triggerd')
    }

    var flag = true
    const HandleSlider=()=>{
        var container = document.getElementById('container')
        var slider_box = document.getElementById('slider')
        var rightbox = document.getElementById('right')


        if(flag){
            rightbox.style.display = "none"
            slider_box.style.display = "block"
            container.style.backgroundColor = "rgba(226, 221, 221, 0.5)"
            slider_box.style.backgroundColor = "white"
            flag = false
        }else{
            rightbox.style.display = "block"
            slider_box.style.display = "none"
            container.style.backgroundColor = "white"
            flag = true
        }
    }
    const Cross=()=>{
        var container = document.getElementById('container')
        var slider_box = document.getElementById('slider')
        var rightbox = document.getElementById('right')
        slider_box.style.display = "none"
        rightbox.style.display = "block"
        container.style.backgroundColor = "white"

    }


    return<>
        <div id="container">
            <div id="left">
                <div id="cartcount"><span className="heading">Cart</span> |&nbsp;&nbsp;<span className="SubHeading">  {1}&nbsp;Item</span></div>
                <div className="tiles">
                    <div id="photo"><img src={img} alt=""  /></div>
                    <div id="detail">
                        <div className="heading">{name}</div>
                        <div id="quantity">
                            <div>Size:{size}</div>
                            <div>Qty:{count}</div>
                        </div>
                        <div>₹{newprice}</div>
                    </div>
                    <div id="edit" onClick={HandleSlider}>EDIT</div>
                </div>
                <div   className="tiles"><span className="SubHeading">Supplier : Expecting Sm</span></div>
            </div>
            <div id="right">
               <div id="pricesummary">
               <div className="heading">Price Details</div>
                <div>
                    <div className="SubHeading">Product Charges</div>
                    <div>₹ {newprice}</div>
                </div>
                <div>
                    <div className="SubHeading">Delivery Charges</div>
                    <div>+₹0</div>
                </div>
                <div>
                    <div className="SubHeading">COD Charges</div>
                    <div>+₹0</div>
                </div>
                <div>
                    <div className="SubHeading">1st Order Discount</div>
                    <div>-₹100</div>
                </div>
               </div>
                
                <div id="totalorder">
                    <div className="heading">Order Total</div>
                    <div className="heading">₹{newprice-100}</div>
                </div>
                <div id="microSize">Clicking on ‘Continue’ will not deduct any money</div>
                <div id="btn" onClick={Handleclick}>Continue</div>
                <div id="rightbottomimg">
                    <img src="https://images.meesho.com/images/marketing/1588578650850.png"  />
                </div>
            </div>
            <div id="slider">
                <div id="slidertop">
                    <div>EDIT ITEMS</div>
                    <div onClick={Cross} id="cross">X</div>
                </div>
                <div>
                <div id="sliderdivs" className="tiles">
                    <div id="photo"><img src={img} alt=""  /></div>
                    <div id="detail">
                        <div className="heading">{name}</div>
                        <div>₹{price}</div>
                        <div>
                            <form>
                                <table>
                                    <tbody>
                                        <tr>
                                            <div id="sliderform">
                                                <div>
                                                <td>Size</td>
                                                <td >
                                                    <select name="" id="">
                                                        <option>M</option>
                                                        <option>S</option>
                                                        <option>L</option>
                                                        <option>XL</option>
                                                        <option>XXL</option>
                                                        <option>XXXL</option>
                                                    </select>
                                                </td>
                                                </div>
                                                <div>
                                                    <td>QTY</td>
                                                    <td><button onClick={Handledecrement}>-</button></td>
                                                    <td>{count}</td>
                                                    <td><button onClick={HandleIncrement}>+</button></td>
                                                </div>
                                            </div>  
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                </div>  
                <div id="editTotal">
                    <div className="heading">Total price</div>
                    <div className="heading">₹{newprice}</div>
                </div>
                <div id="sliderBottom">
                    <div id="btn" onClick={Cross}>Save Changes</div>
                </div>      
            </div>
        </div>
    </>
}