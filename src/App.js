
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cartproduct from './cartproduct';
import Cartlist from './cartlist';
import Topbar from './topbar';
import { useState } from 'react';



function App() {
  let [bikes]=useState([
  {
    id:"1",
    name:"KTM 390 Duke",
    price:294274,
    img:"https://imgd.aeplcdn.com/310x174/n/cw/ec/129747/390-duke-right-front-three-quarter.gif?isig=0"
  },{
    id:"2",
    name:"Keeway K300 N",
    price:285000,
    img:"https://imgd.aeplcdn.com/393x221/n/cw/ec/130723/k300-n-right-front-three-quarter.gif?isig=0&q=75"
  },{
    id:"3",
    name:"Honda Africa Twin",
    price:1601500,
    img:"https://imgd.aeplcdn.com/310x174/n/cw/ec/114281/africa-twin-2022-right-front-three-quarter.jpeg?isig=0&q=80"
  },{
    id:"4",
    name:"Husqvarna Vitpilen 250",
    price:214791,
    img:"https://imgd.aeplcdn.com/393x221/bw/models/husqvarna-vitpilen-250-standard20200225140033.jpg?q=75"
  },{
    id:"5",
    name:"Bajaj Dominar 400",
    price:222746,
    img:"https://imgd.aeplcdn.com/393x221/n/cw/ec/114431/dominar-250-right-front-three-quarter.jpeg?isig=0&q=75"
  },{
    id:"6",
    name:"Husqvarna Vitpilen 250",
    price:214791,
    img:"https://imgd.aeplcdn.com/310x174/n/cw/ec/105581/right-front-three-quarter.jpeg?isig=0&q=80"
  },{
    id:"7",
    name:"Suzuki Hayabusa",
    price:1648831 ,
    img:"https://imgd.aeplcdn.com/393x221/bw/models/husqvarna-vitpilen-250-standard20200225140033.jpg?q=75"
  },{
    id:"8",
    name:"Royal Enfield Himalayan",
    price:214501,
    img:"https://imgd.aeplcdn.com/310x174/bw/models/royal-enfield-himalayan-standard--bs-vi-202120210211125102.jpg?q=80"
  }
  ]);
  let [cartitems,setcartitems]=useState([])
  let addcart=((bikes)=>{
    setcartitems([...cartitems,bikes])
  })
  let removecart=((bikes)=>{
    let indexval=cartitems.findIndex(obje=>obje.id===bikes.id)
    cartitems.splice(indexval,1)
    setcartitems([...cartitems])
  })

  return (
  <>
    <div className='container'>
      <Topbar></Topbar>
      <div className='row'> 
        <div className='col-lg-8'> 
          <div className='row'>
         {
           bikes.map((output)=>{
            return<Cartproduct all={output} cart={addcart} cartitems={cartitems}></Cartproduct>
           })
          }   
          </div>
        </div>
        <div className='col-lg-4 mt-3 bor'>
          <h2>Cart</h2>
          <Cartlist cartitems={cartitems} removecart={removecart}></Cartlist>
        </div>
      </div>
    </div></>
  );
}

export default App;
