import React from 'react'
import food from './images/Food.jpeg'
import beverage from './images/Beverages.jpeg'
import desserts from './images/Dessert.jpg'
import special from './images/Special.jpeg'

function Cards() {
  return (
    <>
    <div className="container text-center py-5">
      <div className="row">
        <div className="col-md-2 mx-5 rounded" >
          <h3>Beverages</h3>
          <div className="food">
            <img src={beverage} alt="" className="rounded-circle lazyload py-3 px-1" style={{width:"200px" , height:"220px"}}/>
            <p className="description">
              <em>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi quidem quibusdam corrupti laudantium consequuntur ullam praesentium a placeat magnam.</em>
            </p>
            <a href="/" className="btn btn-outline-dark" role="button">BEVERAGES MENU</a>
          </div>
        </div>
        <div className="col-md-2 mx-5 rounded">
          <h3>Food</h3>
          <div className="food">
            <img src={food} alt="" className="rounded-circle lazyload py-3 px-1" style={{width:"200px" , height:"220px"}}/>
            <p className="description">
              <em>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi quidem quibusdam corrupti laudantium consequuntur ullam praesentium a placeat magnam.</em>
            </p>
            <a href="/" className="btn btn-outline-dark" role="button">FOOD MENU</a>
          </div>
        </div>
        <div className="col-md-2 mx-5 rounded" >
          <h3>Desserts</h3>
          <div className="food">
            <img src={desserts} alt="" className="rounded-circle lazyload py-3 px-1" style={{width:"200px" , height:"220px"}}/>
            <p className="description">
              <em>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi quidem quibusdam corrupti laudantium consequuntur ullam praesentium a placeat magnam.</em>
            </p>
            <a href="/" className="btn btn-outline-dark" role="button">DESSERTS MENU</a>
          </div>
        </div>
        <div className="col-md-2 mx-5 rounded" >
          <h3>Our Special</h3>
          <div className="food" >
            <img src={special} alt="" className="rounded-circle lazyload py-3 px-1" style={{width:"200px" , height:"220px"}}/>
            <p className="description">
              <em>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi quidem quibusdam corrupti laudantium consequuntur ullam praesentium a placeat magnam.</em>
            </p>
            <a href="/" className="btn btn-outline-dark" role="button">SPECIAL'S MENU</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards