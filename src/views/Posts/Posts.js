import React from "react";
import blogData from './../../config/blog-data.json'
import PriviewPostCard from "../../components/PriviewPostCard/PriviewPostCard";
import "./Posts.css"

function Posts() {
  return (
    <div>
      <h1 className="heading">Indoor Plants 🎋🌴</h1>
    <div className=" d-flex">
        {
          blogData.map((post, index) => {
            const { id, title, image, description, } = post

            return (
              <>

                <PriviewPostCard key={index} id={id} title={title} image={image} description={description} />

              </>

         
      )


      })
      }
      </div>
    </div>


  )
}
export default Posts