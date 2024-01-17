import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aside from "./components/Aside.jsx";
import Container from "./components/Container.jsx";
import Button from "./components/Button.jsx";
import './App.css'

function App() {
    const [isOpen, toggleIsOpen] = useState(true)
    const handleClickIsOpen = () => toggleIsOpen(prev=>!prev)

    return (
        <>
            <main className="main">
                <Aside isOpen={isOpen}/>
                <Button handleClick={handleClickIsOpen} isOpen={isOpen}/>
                <Container/>
            </main>
        </>
    )
}

export default App
