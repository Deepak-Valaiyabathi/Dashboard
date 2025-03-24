import Landing from "../Landing";
import Login from "../Login";
import AdminPage from "../AdminPage";
import Kam from "../Kam.js";
import Lead from "../Lead.js";

const Mainroutes = {
    path:"/",
    element:<Landing/>,
    children:[
        {
            path:"",
            element:<Login/>
        },
        {
            path:"/adminPage",
            element:<AdminPage/>
        },
        {
            path:"/kam/:id",
            element:<Kam/>
        },
        {
            path:"/lead/:id",
            element:<Lead/>
        }
    ]
}
export default Mainroutes