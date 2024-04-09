import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import ForgorPass from './pages/ForgorPass';

function App() {
    const router = [
        {"/": <Home />},
        {"/signin": <Signin />},
        {"/notfound": <NotFound />},
        {"/forgotPassword": <ForgorPass />},
    ]

    return (
        <div className='min-h-svh flex justify-between flex-col'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path='/forgotPassword' element={<ForgorPass />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App