import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = 'http://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Home;