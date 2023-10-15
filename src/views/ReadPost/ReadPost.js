import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogData from "./../../config/blog-data.json";
import "./ReadPost.css"

function ReadPost() {
    const { id } = useParams()

    const [post, setPost] = useState({})

    useEffect(() => {
        blogData.forEach((postObj) => {
            if (postObj.id == id) {
                setPost(postObj)
            }
        })
    }, [id])

    return (
        <>
        <h1 className="about-heading">About Plant</h1>
            <div className=" main-container">
                <div className="img-cont">
                    <img src={post.image}  className="img-1"/>
                </div>
                <div className="img-cont info-cont" >
                    <h1 className="title">{post.title}</h1>
                    <p className="desccription">{post.description}</p>
                    <p className="content">{post.content}</p>
                </div>
            </div>
        </>

    )
}
export default ReadPost