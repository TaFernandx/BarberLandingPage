import React, {useState} from 'react'
import './style.css'


export default function LandingPg () {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const DarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };
    return(
        <div className={isDarkMode ? 'dark-mode' : 'bright-mode'}>
            <header className='limitar'>
               <img className='logo' src='./assets/barbearia-logo.png'/>

               <button className='dark' onClick={DarkModeToggle}>
                <img src={isDarkMode ? './assets/sun.png' : './assets/moon.png'}/>
                <p>{isDarkMode ? 'Light' : 'Dark'}</p>
                </button> 
            </header>

            <section></section>

            <section className='banner'></section>

            <section className='text limitar'>
                <div className='limitar'>
                <h1>Welcome to the Barber Shop</h1>
                <h2>Our barbershop offers highly specialized professionals, 
                and we are always ready to fulfill your highest expectations.
                </h2>

                <p className='firstp'>Our services are dedicated to your personal success. Here, 
                    we have an award-winning team who have demonstrated their 
                    talent as Barber Masters in various Style Competitions. 
                    Let one of our barbers be your personal stylist!
                </p>

                <p className='secondp'> S. Kelly</p>
                <a href='https://github.com/TaFernandx/BarberLandingPage'>See the Code</a>
                </div>

                
            </section>
        </div>
    )
}