import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
import SignupBtn from '../components/buttons/SignupBtn';
import headerBg from '../assets/images/background/hero background.png'
import Category from '../components/Category';

function Home() {
  const url = 'http://localhost:8000'; // backend server

  return (
    <>
        <Header />
        <Category />
        <Footer />
    </>
  )
}

export default Home