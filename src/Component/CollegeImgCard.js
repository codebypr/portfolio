import React from 'react'

import {GrNext, GrPrevious} from 'react-icons/gr';

export default function CollegeImgCard(props) {
  return (
    <div>
  
             <div id={props.id} className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner"  >
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={props.img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={props.img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={props.img3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={props.img4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={props.img5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={props.img6} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`} data-bs-slide="prev">
    <GrPrevious  size={40} style={{backgroundColor:'white'}}/>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`}data-bs-slide="next">
  <GrNext  size={40} style={{backgroundColor:'white'}}/>
  </button>
</div> 

    </div>
  )
}
