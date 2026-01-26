import React from 'react';
import data from '../restApi.json';

const Menu = () => {
  return (
    <section className='menu' id="menu">
      <div className='container'>
        <div className='heading_section'>
          <h1 className='heading'>Popular Dishes</h1>
          <p>Discover our carefully curated selection of signature dishes, crafted with premium ingredients and presented with artistic flair. From hearty breakfasts to exquisite dinners, each plate tells a story of flavor and passion.</p>
        </div>

        <div className="dishes_container">
          {data.data[0].dishes.map(element => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
