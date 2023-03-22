import { useRoutes } from "react-router-dom"
import UserLayouts from "@/layouts/UserLayouts/Index"
import LandingPage from "@/pages/LandingPage/Index"
import { Children } from "react"

const IndexRouter = () => {
    const routes = useRoutes([
        {
            path: '/login'
        },
        {
            path: '/',
            element: <UserLayouts />,
            children: [
                {path: '/', element: <LandingPage />}
            ]
        }
    ])

    return routes
}

export default IndexRouter