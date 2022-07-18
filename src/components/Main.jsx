import React from 'react'
import {Routes, Route} from 'react-router-dom';

import {About} from '../pages/About';
import {Home} from '../pages/Home';
import {Contact} from '../pages/Contact';
import {NotFound} from '../pages/NotFound';
import {Category} from '../pages/Category';
import {Recipe} from '../pages/Recipe';

const Main = () => {
  return (
    <div className='container content'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  )
}

export {Main}