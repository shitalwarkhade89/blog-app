import React from "react";
import './PriviewPostCard.css'
import { Link } from 'react-router-dom'
function PriviewPostCard({ id, image, title, description }) {
    return (

        <div className="preview-post-card">
            <img src={image} className="img" />
            <h2 className="plant-name">{title}</h2>
            <p className="descriptin">{description}</p>
            <Link to={`/post/read/${id}`}><button className="btn">Read More</button></Link>
        </div>

    )
}
export default PriviewPostCard