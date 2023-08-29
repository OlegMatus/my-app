import React, {useEffect, useState} from 'react';

import {Cars} from "../components";
import {CarForm} from "../components";

import {Outlet} from "react-router-dom";

const CarsPage = () => {

    return (
        <div>
            <Outlet/>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export default CarsPage;