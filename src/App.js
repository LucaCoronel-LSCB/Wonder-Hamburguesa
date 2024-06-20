// src/App.js
import React from 'react';
import TarjetaHamburguesa from './componentes/TarjetaHamburguesa';

const App = () => (
    <div>
        <h1 className="Titulo">Hamburgueseria Wonder</h1>
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="#home">Productos</a></li>
                <li><a href="#about">Lanzamientos</a></li>
                <li><a href="#services">Locales</a></li>
                <li><a href="#contact">Nosotros</a></li>
            </ul>
        </nav>
        <div></div>

        <div className="Caja">
            <h2>Wonder Clásicas</h2>
            <TarjetaHamburguesa name='Hamburguesa Simple con Papas' price={6199} />
            <TarjetaHamburguesa name='Hamburguesa Doble con Papas' price={7799} />
            <TarjetaHamburguesa name='Hamburguesa Triple con Papas' price={9799} />
        </div>

        <div className="Caja">
            <h2>Wonder Premium</h2>
            <TarjetaHamburguesa name='Hamburguesa Onion BBQ' price={6199} />
            <TarjetaHamburguesa name='Hamburguesa Argentina' price={7799} />
            <TarjetaHamburguesa name='Hamburguesa Vacio Desmenuzado' price={9799} />
        </div>

        <div className="Caja">
            <h2>Otras de Wonder</h2>
            <TarjetaHamburguesa name='Hamburguesa Veggies' price={6199} />
            <TarjetaHamburguesa name='Hamburguesa de Pollo' price={7799} />
            <TarjetaHamburguesa name='Cajita Feliz' price={9799} />
        </div>

        <footer>
            <div className="Footer">
                <p>Instagram: Wonder_Ok</p>
                <p>Horario: 11:30AM a 15:00PM y de 20PM a 24PM.</p>
                <p>Contacto: +5493547315769</p>
            </div>
        </footer>
    </div>
);

export default App;
