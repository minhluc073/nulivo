'use client'
import { useEffect, useState } from "react"
import SidebarDashboard from "../elements/SidebarDashboard";




export default function LayoutAdmin({children}){
    const [isSidebar, setSidebar] = useState(false)
	const handleSidebar = () => setSidebar(!isSidebar)

    const [showNavText, setShowNavText] = useState(false)
	const handleSidebarHideText = () => setShowNavText(!showNavText)
    
    


    return(
        <div className="flat-spacing-1">
            <div className="container">
                <div className={`layout-wrap ${isSidebar ? "visible-sidebar" : ""}`}>
                    <SidebarDashboard handleSidebarHideText={handleSidebarHideText} showNavText={showNavText} />
                    <div className="main-content">
                        <div className="button-show-hide show-mb-admin" onClick={handleSidebar}><span>Show Dashboard</span></div>
                        <div className="main-content-inner">
    						{children}
                        </div>
                    </div>
                    <div className="overlay-dashboard" onClick={handleSidebar} />
                </div>
            </div>
        </div>
    )
}