import React from 'react'
// import ReactDOM from 'react-dom/client'
import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interests from './components/Interests'

export default function App() {
    return (
        <div>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

// const root = createRoot('root');
// root.render('root');
// ReactDOM.createRoot(<App />, document.getElementById('root')).render
