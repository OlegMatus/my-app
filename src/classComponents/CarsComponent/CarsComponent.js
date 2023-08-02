import React, {Component} from 'react';

import {carService} from "../../services/carService";
import CarComponent from "../CarComponent/CarComponent";

class CarsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        carService.getAll().then(({data}) => this.setState({cars: data}))
    }

    render() {
        return (
            <div>
                {this.state.cars.map(car => <CarComponent key={car.id} car={car}/>)}
            </div>
        );
    }
}

export default CarsComponent;