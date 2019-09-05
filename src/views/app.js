import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Menu, DateIndicator } from '../components'
import MangaReader from './manga-reader'
import Grammar from './grammar'
import Help from './help'
import '../assets/bootstrap/css/app.css'

function App() {
  return (
    <div className='app'>
      <BrowserRouter basename="/mangaq/">

        <Route path='/' component={() => (
          <header className='app-header'>
            <Menu />
          </header>
        )} />
        <Route path='/manga' component={MangaReader} />
        <Route path='/grammar' component={Grammar} />
        <Route path='/help' component={Help} />
      </BrowserRouter>

      <footer className='app-footer'>
        <span>This page was visited on:&nbsp;</span><DateIndicator />
      </footer>
    </div>
  );
}

export default App
