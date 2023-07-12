import React, {useContext} from 'react';
import {Context} from "../../../App";

const SubChild22 = () => {
    const {setData} = useContext(Context);
    return (
        <div>
       SubChild2_2
            <button onClick={()=>setData(prev=>[...prev,'smile'])}>push here</button>
        </div>
    );
};

export {SubChild22};