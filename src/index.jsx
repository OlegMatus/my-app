import ReactDOM from 'react-dom/client';
import {Provider} from "./hoc/provider";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider>
       <RouterProvider router={router}/>
   </Provider>
);

