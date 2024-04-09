import React, { useEffect } from 'react'
import Header from '../components/templates/Header'
import Category from '../components/Category'
// import axios from 'axios';

function Home() {
  // useEffect(() => {
  //   axios.get('http://localhost:9000')
  //   .then((response) => {console.log(response);})
  //   .catch((error) => {console.log(error);})
  // })
  return (
    <>
      <Header />
      <div className=''>
        <div className="bg-[url('./src/assets/images/backgrounds/panda.png')]">
          <Category />
          
        </div>
      </div>
    </>
  )
}

export default Home