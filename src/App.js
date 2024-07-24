// src/App.js
import React from 'react';
import TarjetaHamburguesa from './componentes/TarjetaHamburguesa/TarjetaHamburguesa';
import './normalize.css'; // Importar normalize.css
import './styles.css'; // Importar styles.css


//Pictures
import StackerSimple from './componentes/Pictures/StackerSimple.png';
import StackerDoble from './componentes/Pictures/Stacker-Doble.png';
import StackerTriple from './componentes/Pictures/Stacker-Triple.png';
import StackerCuadruple from './componentes/Pictures/Stacker-Cuadruple.png';
import HamburguesaClasica from './componentes/Pictures/HAMBURGUESA-CLASICA-1024x683.png';
import Whopper from './componentes/Pictures/Whopper.png';
import WhopperDoble from './componentes/Pictures/Whopper-doble.png';
import ChilliKingPollo from './componentes/Pictures/Chilli-king_pollo.png';
import PolloCrispyMarron from './componentes/Pictures/POLLO-CRISPY-MARRON.png';
import KingDePolloGuacamole from './componentes/Pictures/King-de-Pollo-Guacamole.png';
import KingDePollo from './componentes/Pictures/KING-DE-POLLO.png';
import KingDePolloFrances from './componentes/Pictures/KING-DE-POLLO-FRANCES.png';

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
        

        <div className="Caja">
            <h2>Carne Smash</h2>
            <TarjetaHamburguesa name='Hamburguesa Clasica ' price={7799} imageSrc={HamburguesaClasica} />
            <TarjetaHamburguesa name='Stacker Simple' price={6199} imageSrc={StackerSimple}  />
            <TarjetaHamburguesa name='Stacker Doble' price={7799} imageSrc={StackerDoble}/>
            <TarjetaHamburguesa name='Stacker Triple' price={9799} imageSrc={StackerTriple} />
            <TarjetaHamburguesa name='Stacker Cuadruple' price={6199} imageSrc={StackerCuadruple}/>
            <TarjetaHamburguesa name='Whopper' price={9799} imageSrc={Whopper}/>
            <TarjetaHamburguesa name='Whopper Doble' price={6199} imageSrc={WhopperDoble} />
            <h2>Pollo Smash</h2>
            <TarjetaHamburguesa name='Chilli king pollo' price={7799} imageSrc={ChilliKingPollo}/>
            <TarjetaHamburguesa name='Pollo Crispy Marron' price={7799} imageSrc={PolloCrispyMarron}/>
            <TarjetaHamburguesa name='King De Pollo Guacamole' price={7799} imageSrc={KingDePolloGuacamole}/>
            <TarjetaHamburguesa name='King De Pollo' price={7799} imageSrc={KingDePollo}/>
            <TarjetaHamburguesa name='King De Pollo Frances' price={7799} imageSrc={KingDePolloFrances}/>
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
