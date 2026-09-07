import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../layout/HomePageLayout";
import HomeComp from "../page/homePage/HomeComp";




export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout/>,
        children:[
            {
                index: true,
                element: <HomeComp/>
            }
        ]
    },
]
)