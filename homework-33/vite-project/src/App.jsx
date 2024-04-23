import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header = () => {
    return (
        <header>
            <h1>Мій додаток React</h1>
        </header>
    );
}
const LeftSidebar = () => {
    return (
        <aside>
            <nav>
                <ul>
                    <li><a href="">Пункт меню 1</a></li>
                    <li><a href="">Пункт меню 2</a></li>
                    <li><a href="">Пункт меню 3</a></li>
                </ul>
            </nav>
        </aside>
    );
}
const MainContainer = () => {
    return (
        <main>
            <h2>Вміст центрального контейнера</h2>
            <p>Це головний контент вашого додатка.</p>
        </main>
    );
}
export const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <LeftSidebar />
                <MainContainer />
            </div>
        </div>
    );
}
