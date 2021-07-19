import React, { useState, useEffect } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [
    {
      id: 1,
      name: "OverWatch",
      price: 20,
      
    },
    {
      id: 2,
      name: "MineCraft",
      price: 32,
    },
    {
      id: 3,
      name: "Fortnite",
      price: 51,
    },
    {
      id: 4,
      name: "Horizon Zero Dawn",
      price: 51,
    },
    {
      id: 5,
      name: "Beach Buggy Racing",
      price: 51,
    },
    {
      id: 6,
      name: "Mario Kart 64",
      price: 100,
    },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
      setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input  type="submit" value="Available" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="Remove from cart" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div>
      Welcome! Shop for a game!
      <div>
      <img src="https://overwatch2-static.playoverwatch.com/96e55071f772ec16093937747dc17ab5efb3e8e5/static/images/share.jpg" width="350" height="250"></img>
      </div>
    
      <div>{listItems}</div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGpuhPo02eqDpgcEWx12ANpG-koetpAnbw5rZlLjCaq9wCfdkgPj2XbwDKoWJDK2AnOw&usqp=CAU"></img>
      </div>
      <div>CART</div>
      <div>{cartItems}</div>
      <div>Total: ${cartTotal}</div>
    </div>
  );
};

export default Shop;
