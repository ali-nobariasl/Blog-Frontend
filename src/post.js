import React, {useState, useEffect} from "react";
import './post.css'


const BASE_URL = 'http://localhost:8000/'

function Post({post}){

    const [imageUrl, setImageUrl] = useState('')
    
    useEffect(() =>{
        setImageUrl( BASE_URL + post.image_url )

    }, [])

    return (
        <div className="post" >
            <image className="post_image" src={imageUrl} />
        </div>
    )
}


export default Post