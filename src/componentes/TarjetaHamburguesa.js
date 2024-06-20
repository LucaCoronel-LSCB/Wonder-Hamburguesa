import React from 'react';
import styles from './TarjetaHamburguesa.module.css';

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
        const hasItems = this.state.cantidad > 0;    // Estado
        const activeClass = hasItems ? styles['card-active'] : '';
        const clases = styles.card + ' ' + activeClass;
        // Si tiene items entonces se aplica la tarjeta activa, si no se aplica la otra tarjeta
        return (
            <div className={clases}>
                <h4 className={styles['name-hamburguesa']}>{this.props.name}</h4>
                <p>Precio: ${this.props.price}</p>
                <div className={styles['cant-hamburguesas']}>Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}> + </button>
                <button onClick={this.restar}> - </button>
                <button onClick={this.resetear}> = </button>
                <hr/>
                <p>
                Total: ${Math.round(this.props.price * this.state.cantidad)}.00
                </p>
            </div>
        );
    }
}

export default TarjetaHamburguesa;
