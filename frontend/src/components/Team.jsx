import React from 'react'
import data from '../restApi.json';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>Meet the passionate culinary artists behind every delicious dish. Our experienced team brings together diverse talents and a shared love for creating memorable dining experiences for you and your loved ones.</p>
        </div>
        <div className="team_container">
          {data.data[0].team.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.name} />
              <h3>{element.name}</h3>
              <p>{element.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team