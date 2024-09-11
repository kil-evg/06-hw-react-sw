import React, { useEffect, useState } from 'react'
import '../Contact.css'
import { base_url, period_month } from '../utils/constants'

const Contact = () => {
  const [planets, setPlanets] = useState(['wait...']);

  async function fillPlanets() {
    const response = await fetch(`${base_url}/v1/planets`);
    const data = await response.json();
    const planets = data.map(item => item.name);
    setPlanets(planets);
    localStorage.setItem('planets', JSON.stringify({
      payload: planets,
      time: Date.now()
    }));
  }

  useEffect(() => {
    const planets = JSON.parse(localStorage.getItem('planets'));
    if (planets && ((Date.now() - planets.time) < period_month)) {
      setPlanets(planets.payload);
    } else {
      fillPlanets();
    }
  }, [])

  return (
    <form className='containerContact'>
      <label>First Name
        <input type="text" name="firstname" placeholder="Your name.." />
      </label>

      <label>Last Name
        <input type="text" name="lastname" placeholder="Your last name.." />
      </label>
      <label>Country
        <select name="planet">
          {planets.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <label>Subject
        <textarea name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
      </label>
      <button>Submit</button>
    </form>
  )
}

export default Contact