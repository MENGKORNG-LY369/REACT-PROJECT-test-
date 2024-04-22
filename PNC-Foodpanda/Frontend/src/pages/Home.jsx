import { useEffect, useState } from 'react'
import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
import SignupBtn from '../components/buttons/SignupBtn';

function Home() {
  const url = 'http://localhost:8000'; // backend server

  return (
    <>
        <Header />
        <div className="lg:px-20 h-[60vh] bg-[url('../src/assets/images/background/hero background.png')] w-screen">
          <div className="max-w-2xl">
            <div className="">
              <h1 className="font-bold tracking-tight text-gray-900 lg:text-4xl sm:text-3xl">
                Data to enrich your online business
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <SignupBtn />
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Home