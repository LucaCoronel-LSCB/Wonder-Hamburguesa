// src/componentes/TarjetaHamburguesa.js
import React from 'react';
import './TarjetaHamburguesa.css';


class TarjetaHamburguesa extends React.Component {
    state = {
        cantidad: 0
    }

    agregar = () => {
        this.setState({
            cantidad: this.state.cantidad + 1
        });
    }

    restar = () => {
        this.setState((prevState) => ({
            cantidad: Math.max(prevState.cantidad - 1, 0)
        }));
    }

    resetear = () => {
        this.setState({
            cantidad: 0
        });
    }

    render() {
        const hasItems = this.state.cantidad > 0
        const clases = hasItems ? 'TarjetaHamburguesa-activa' : 'TarjetaHamburguesa'
        return (
            <div className={clases}>
                <h4>{this.props.name}</h4>
                <p>Precio: ${this.props.price}</p>
                <div>Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}> + </button>
                <button onClick={this.restar}> - </button>
                <button onClick={this.resetear}> = </button>
                <hr/>
                <p>
                    Total: {this.props.price * this.state.cantidad}
                </p>
            </div>
        );
    }
}

export default TarjetaHamburguesa;
