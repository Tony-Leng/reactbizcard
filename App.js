import React from 'react'
// import ReactDOM from 'react-dom'
import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interests from './components/Interests'

export default function App() {
    return (
        <div>
            <h1>Hello, it's me...</h1>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

// ReactDOM.render(<App />, document.getElementById('root'))
