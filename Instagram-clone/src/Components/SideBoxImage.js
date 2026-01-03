/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import './style.css'
import image from "../images/neerajchopra.webp";

const SideBoxImage = () => {
    return (
        <>
            <div className="SideBoxImageContainer">
                    <img src={image} className="sideBox_image" alt=""></img>
                    <div>
                        <h4>Jugesh Raghav</h4>
                        <p>jugesh_raghav</p>
                    </div>
            </div>
        </>
    )
}

export default SideBoxImage