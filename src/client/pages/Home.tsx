import React, { useState, useEffect } from 'react';

import BlogCard from '../components/BlogCard';
import Header from '../components/Header';

const Home: React.FC<IHome> = () => {
    const [blogs, setBlogs] = useState<BlogState[]>([]);
    
    const getBlogs = async () => {
        let r = await fetch('/api/blogs');
        let blogs = await r.json();
        setBlogs(blogs);
    }
    
    useEffect(() => {getBlogs();}, [])
    
    return (
        <div>
            <Header></Header>

            <div className="row d-flex justify-content-center">
                <div id="blog-container" className="card col-md-8">
                    <ul className="list-group list-group-flush">
                    {blogs.map(blog => <BlogCard blog={blog} key={`blogCard-${blog.id}`} />)}
                    </ul>
                </div>
            </div>

        </div>
    );
};

interface IHome {}

export interface BlogState {
    id: number,
    title: string,
    content: string,
    name: string
}

export default Home;