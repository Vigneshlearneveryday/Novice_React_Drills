// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Product from "./Product";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const products = [
    {
      name: "Smartphone X100",
      price: 699.99,
      description:
        "A high-performance smartphone with 128GB storage and a 48MP camera.",
      image: "https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_SX466_.jpg",
    },
    {
      name: "Laptop Pro 15",
      price: 1199.99,
      description:
        "A powerful laptop with a 15-inch display, 16GB RAM, and 512GB SSD.",
      image:
        "https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Wireless Earbuds Y",
      price: 59.99,
      description:
        "Compact and lightweight wireless earbuds with noise cancellation.",
      image: "https://m.media-amazon.com/images/I/41LjwPfO77L.jpg",
    },
    {
      name: "Smartwatch Z",
      price: 199.99,
      description:
        "A stylish smartwatch with fitness tracking and heart rate monitoring.",
      image:
        "https://m.media-amazon.com/images/I/517kpG7tqjL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "4K TV Ultra",
      price: 899.99,
      description: "A 55-inch 4K Ultra HD TV with HDR and smart features.",
      image:
        "https://img.etimg.com/thumb/width-1600,height-900,imgsize-175190,resizemode-75,msid-62066313/magazines/panache/kodak-55-inch-ultra-hd-led-smart-tv-review-a-hdr-capable-4k-android-tv-for-the-budget-conscious.jpg",
    },
    {
      name: "Bluetooth Speaker Max",
      price: 129.99,
      description:
        "A portable Bluetooth speaker with 360-degree sound and 12-hour battery life.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uQy9Q3bn1aMKpskBCNrGvZodpMlsyfz1Xw&s",
    },
    {
      name: "Tablet S10",
      price: 329.99,
      description:
        "A versatile tablet with a 10.5-inch display and 64GB storage.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr24J6EI6Vp_WJzjOxoA9L254OMdx6MDjyEQ&s",
    },
    {
      name: "Gaming Console 5",
      price: 499.99,
      description:
        "The latest gaming console with ultra-fast loading and 8K resolution support.",
      image:
        "https://www.livemint.com/lm-img/img/2024/04/29/600x338/pexels-jeshoots-com-147458-442576_1714388557344_1714388564716.jpg",
    },
    {
      name: "Smart Home Hub",
      price: 149.99,
      description:
        "A smart home hub that connects and controls all your smart devices.",
      image:
        "https://i0.wp.com/staceyoniot.com/wp-content/uploads/2020/12/Home-Assistant-Blue-4-scaled.jpg?fit=2560%2C1707&ssl=1",
    },
    {
      name: "Digital Camera D5",
      price: 799.99,
      description:
        "A professional digital camera with 24.2MP and 4K video recording.",
      image:
        "https://www.cined.com/content/uploads/2016/04/Nikon-D5-1-of-1-4-1600x900.jpg",
    },
    {
      name: "E-reader X",
      price: 129.99,
      description:
        "A lightweight e-reader with a high-resolution display and adjustable light.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-03W8H4exaLxNF269ZdYJWUX0SxMRNQxbUw&s",
    },
    {
      name: "Noise Cancelling Headphones",
      price: 249.99,
      description:
        "Over-ear headphones with advanced noise cancellation and 30-hour battery life.",
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2023/09/noise-cancelling-headphone-2048px-0862-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    },
    {
      name: "Smart Thermostat",
      price: 179.99,
      description:
        "A smart thermostat that learns your preferences and saves energy.",
      image: "https://m.media-amazon.com/images/I/61e1-sujl7L._AC_SX466_.jpg",
    },
    {
      name: "Action Camera Pro",
      price: 299.99,
      description:
        "A waterproof action camera with 4K video and image stabilization.",
      image: "https://m.media-amazon.com/images/I/71RkC4HpU5L._AC_SX466_.jpg",
    },
    {
      name: "Drone X200",
      price: 399.99,
      description: "A high-performance drone with 4K camera and GPS tracking.",
      image: "https://m.media-amazon.com/images/I/71ToKoJd5+L._AC_SX466_.jpg",
    },
    {
      name: "Fitness Tracker Band",
      price: 49.99,
      description:
        "A sleek fitness tracker with heart rate monitoring and sleep tracking.",
      image: "https://m.media-amazon.com/images/I/71nExFWGRQL._AC_SX466_.jpg",
    },
    {
      name: "Robot Vacuum Cleaner",
      price: 349.99,
      description:
        "An intelligent robot vacuum cleaner with smart navigation and powerful suction.",
      image: "https://m.media-amazon.com/images/I/71BJoXMxDWL._AC_SX466_.jpg",
    },
    {
      name: "Wireless Charging Pad",
      price: 39.99,
      description:
        "A fast wireless charging pad compatible with all Qi-enabled devices.",
      image: "https://m.media-amazon.com/images/I/61Idoz7EvlL._AC_SX466_.jpg",
    },
    {
      name: "Smart Light Bulbs",
      price: 69.99,
      description:
        "A set of 4 smart light bulbs with adjustable brightness and color temperature.",
      image: "https://m.media-amazon.com/images/I/71oFyCYT6lL._AC_SX466_.jpg",
    },
    {
      name: "Portable Power Bank",
      price: 29.99,
      description:
        "A high-capacity power bank with fast charging and multiple USB ports.",
      image: "https://m.media-amazon.com/images/I/71bKbBqU+BL._AC_SX466_.jpg",
    },
  ];

  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  let addItem = (productItem) => {
   setItems([...items,productItem])
   setTotal(total + productItem.price)
   
  };

  // setSelectData((prevSelectData) => [...prevSelectData, Item]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1>Products</h1>
            <div className="d-flex flex-wrap">
              {products.map((product, index) => {
                return (
                  <Product product={product} key={index} addItem={addItem} />
                );
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <h1>Cart</h1>
            <div>
              <Cart items={items} total={total} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
