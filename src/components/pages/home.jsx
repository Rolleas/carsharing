import {Outlet} from "react-router-dom";
import {Menu} from "../menu/menu";
import {Footer} from "../footer/footer";

export const HomePage = () => {
    return (
        <div className="w-full min-h-[100vh]">
           <Menu/>
            <Outlet/>
            <Footer/>
        </div>
    )
}