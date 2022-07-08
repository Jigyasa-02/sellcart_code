import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";

import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      id:1,
      ownername: "Mr.kishor",
      name: "IPhone 10S Max",
      price: 99999,
      desc:"It features a chassis with flat edges, similar to the iPhone 4 and iPhone 5 designs, as well as the iPad Pro since 2018 and the 4th-generation iPad Air, which also released in 2020. The notch size is similar to previous iPhone models, despite speculation about a reduction in width.",
      email: "0000@gmail.com",
    },
    {
      id:2,
      ownername: "Mr.Vibhor",
      price: 9999,
      name: "IPhone 11",
      desc:"The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.",
      email: "0000@gmail.com",
    },
    {
      id:2,
      ownername: "Mr.Vibhor",
      price: 9999,
      name: "IPhone 11",
      desc:"The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.",
      email: "0000@gmail.com",
    },
    {
      id:2,
      ownername: "Mr.Vibhor",
      price: 9999,
      name: "IPhone 11",
      desc:"The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.",
      email: "0000@gmail.com",
    },
    {
      id:2,
      ownername: "Mr.Vibhor",
      price: 9999,
      name: "IPhone 11",
      desc:"The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.",
      email: "0000@gmail.com",
    },
    {
      id:2,
      ownername: "Mr.Vibhor",
      price: 9999,
      name: "IPhone 11",
      desc:"The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.",
      email: "0000@gmail.com",
    },
    {
      id:2,
      ownername: "Mr.Vibhor",
      price: 9999,
      name: "IPhone 11",
      desc:"The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.",
      email: "0000@gmail.com",
    },
    {
      id:2,
      ownername: "Mr.Vibhor",
      price: 9999,
      name: "IPhone 11",
      desc:"The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.",
      email: "0000@gmail.com",
    },
    {
      id:2,
      ownername: "Mr.Vibhor",
      price: 9999,
      name: "IPhone 11",
      desc:"The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.",
      email: "0000@gmail.com",
    },
    {
      id:2,
      ownername: "Mr.Vibhor",
      price: 9999,
      name: "IPhone 11",
      desc:"The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.",
      email: "0000@gmail.com",
    },
    {
      id:2,
      ownername: "Mr.Vibhor",
      price: 9999,
      name: "IPhone 11",
      desc:"The iPhone 11 includes a dual-lens 12 MP rear camera array. It has one ƒ/2.4 ultra-wide-angle lens with a 120° field of view and 2× optical zoom out, and one ƒ/1.8 wide-angle lens. The iPhone 11 supports 4K video at up to 60 fps and 1080p slow motion at up to 240 fps.",
      email: "0000@gmail.com",
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);


  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (ownername,name, price,email,desc) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      ownername:ownername,
      price: price,
      email:email,
      desc:desc,
    });
    console.log(newProductList)
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        
        <ProductList
          productList={productList}
          removeItem={removeItem}
        />
        <br/>
        <br/>
        <AddItem addItem={addItem} />
      </main>
      {/* <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} /> */}
      
    </>
  );
}

export default App;