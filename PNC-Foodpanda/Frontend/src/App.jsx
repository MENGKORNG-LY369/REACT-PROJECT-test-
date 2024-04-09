import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import ForgorPass from './pages/ForgorPass';
import Search from './pages/Search';
import Offer from './pages/Offer';
import Profile from './pages/Profile';
import Signout from './pages/Signout';

function App() {
    const router = [
        {"/": <Home />},
        {"/signin": <Signin />},
        {"/notfound": <NotFound />},
        {"/forgotPassword": <ForgorPass />},
        {"/search": <Search />},
        {"/offer": <Offer />},
        {"/profile": <Profile />},
        {"/signout": <Signout />},
    ]

    return (
        <div className='min-h-svh flex justify-between flex-col'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path='/forgotPassword' element={<ForgorPass />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/offer' element={<Offer />} />
                    <Route path='/profile' element={<Profile />} /> 
                    <Route path='/signout' element={<Signout />} /> 
                </Routes>
            </Router>
        </div>
    )
}

export default App