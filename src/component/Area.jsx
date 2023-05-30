import React from 'react'
import twtext from "../assets/twtext.png";
import tw2text from "../assets/tw2text.png";
import tw3text from "../assets/tw3text.png";
import tw4text from "../assets/tw4text.png";
import tw from "../assets/tw.png";
import tw2 from "../assets/tw2.png";
import tw3 from "../assets/tw3.png";
import tw4 from "../assets/tw4.png";
const Area=()=> {
  return (
    <div className="container">
    <div className="changText row ">
      <div className="col  me-3 " style={{width:"20%"}}>
        <img style={{width:"20%"}} src={tw} alt="" />
        <img  src={twtext} style={{zIndex:"999",width:"15%"}} alt="" />
        {/* <!-- <a href="../teaching_home/teaching.html"><p>tw</p></a> --> */}
      </div>
      <div className="col  me-3" style={{width:"20%"}}>
        <img style={{width:"20%"}} src={tw2} alt="" />
        <img  src={tw2text} style={{zIndex:"999",width:"15%"}} alt="" />
        {/* <!-- <a href="../teaching_home/teaching.html"><p>tw2</p></a> --> */}
      </div>
      <div className="col  me-3" style={{width:"20%"}}>
        <img style={{width:"20%"}} src={tw3} alt="" />
        <img  src={tw3text} style={{zIndex:"999",width:"15%"}} alt="" />
        {/* <!-- <a href="../teaching_home/teaching.html"><p>南部</p></a> --> */}
      </div>
      <div className="col  me-3" style={{width:"20%"}}>
        <img style={{width:"20%"}} src={tw4} alt="" />
        <img  src={tw4text} style={{zIndex:"999",width:"15%"}} alt="" />
        {/* <!-- <a href="../teaching_home/teaching.html"><p>tw4課程</p></a> --> */}
      </div>
    </div>
  </div>

  )
}

export default Area