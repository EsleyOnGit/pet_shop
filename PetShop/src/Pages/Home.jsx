import { useEffect, useState } from "react";
import api from "../api/api";

const Home = () =>{
    return(
        <>
        </>
    )
}

export default Home;

/*
/posts	100 posts
/comments	500 comments
/albums	100 albums
/photos	5000 photos
/todos	200 todos
/users	10 users
GET	/posts
GET	/posts/1
GET	/posts/1/comments
GET	/comments?postId=1
POST	/posts
PUT	/posts/1
PATCH	/posts/1
DELETE	/posts/1
*/