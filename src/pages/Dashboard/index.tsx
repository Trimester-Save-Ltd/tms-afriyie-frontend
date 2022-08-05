import Sidebar from "components/Sidebar"
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";


const Dashboard = () => {


    return(
        <div className="bg-[#F2F6FA] flex h-screen w-screen overflow-hidden relative" >
            <Helmet>
                <title>Dashboard | Trimester Save</title>
                <meta name="description" content="TMS" />
            </Helmet>
            <Sidebar />

            <div className="ml-[72] w-full overflow-scroll" >
                <Outlet />
            </div>
           
             

        </div>

    )
}

export default Dashboard
