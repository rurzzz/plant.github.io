import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from 'axios';
import "./CourseIndex.css";

const [value, setValue] = useState(0);
const [activeView, setActiveView] = useState("view_grid");

const handleLinkClick = (e) => {
  const clickedLink = e.target;
  const clickedView = clickedLink.getAttribute("data_view");

  setActiveView(clickedView);
  if (clickedView === "view_grid") {
    document.querySelector(".view_grid").style.display = "block";
    document.querySelector(".view_list").style.display = "none";
  } else if (clickedView === "view_list") {
    document.querySelector(".view_grid").style.display = "none";
    document.querySelector(".view_list").style.display = "block";
  }
};
const [products, setTodoList] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          const result = await Axios.get('http://localhost:8080/product/體驗課程');
          setTodoList(result.data);
        };
    
        fetchData();
      }, []);
const [filter,setFilter]=useState(null);
// 設定要篩選的類別
const filterResult=(catItem)=>{
  setFilter(catItem);
};
let filteredProducts =products;
//為了根據選擇的篩選條件 filter 來過濾 products 陣列
if(filter){
  filteredProducts=products.filter((product)=>{
    return product.categoryId===filter;
  })
}
function Filter() {
  return (
    <div className="container">
        <div className="row">
          <div className="area">
            <button onClick={() =>setFilter(null)}>全部課程</button>
            {/* <!-- <span>/</span> --> */}
            <button onClick={()=>filterResult(3)}>乾燥花</button> 
            {/* <!-- <span>/</span> --> */}
            <button onClick={()=>filterResult(1)}>多肉植物</button>
            {/* <!-- <span>/</span> --> */}
            <button onClick={()=>filterResult(2)}>生態瓶</button>
            
            <i
              style={{fontSize:"25px"}}
              data_view="view_grid"
              className={`myClick bi bi-grid-3x3-gap-fill ${
                activeView === "view_grid" ? "active" : ""
              }`}
              onClick={handleLinkClick}
            ></i>
            <i
              style={{fontSize:"30px",margin:'10px'}}
              data_view="view_list"
              className={`myClick bi bi-justify ${
                activeView === "view_list" ? "active" : ""
              }`}
              onClick={handleLinkClick}
            ></i>
            
          </div>
        </div>
      </div>

  )
}

export default Filter