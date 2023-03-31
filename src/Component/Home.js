import React from 'react'
import gents from '../Images/gents.jpg'


function Home() {
  return (
    <div className='container hero'>
      <div class="card bg-dark text-white">
<img src={gents} class="card-img" alt="..."height={500}width ={300}/>
  <div class="card-img-overlay text-center">
    <h1 class="card-title">New Season Arrivals</h1>
    <p class="card-text">CHECK ALL THE TRENDS</p>
    
  </div>
</div>
    </div>
  )
}

export default Home