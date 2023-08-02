import React, {Component} from 'react';

class CarComponent extends Component {
    
    render() {
        const {id, brand, price, year} = this.props.car;
        return (
            <div>
                <div>id: {id}</div>
                <div>brand: {brand}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
        );
    }
}

export default CarComponent;