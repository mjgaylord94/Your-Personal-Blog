import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const Blog: React.FC<IBlog> = () => {
    const { id }: { id: string } = useParams()
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState("")

    const getBlog = async () => {
        let r = await fetch(`/api/blogs/${id}`);
        let blog = await r.json();
        setTitle(blog.title);
        setName(blog.name);
        setContent(blog.content);
    }

    // Figure Out what is wrong with Tags
    const getTag = async () => {
        let r = await fetch(`/api/blogtags/${id}`);
        let tags = await r.json();
        setTag(tags[0][0].name)
    }

    useEffect(() => { getBlog(); getTag(); }, [])

    return (
        <div>
            <Header></Header>

            <div className="row d-flex justify-content-center">
                <div id="blog-container" className="card col-md-8">
                    <div className="blogPost">
                        <h3>{title}</h3>
                        <h5>By: {name}</h5>
                        <h6>From: {tag}</h6>
                        <div>{content}</div>
                        <br />
                        <Link to={`/edit/${id}`} id="edit-button" className="btn btn-secondary">Edit</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

interface IBlog { }

interface BlogState {
    id: number,
    title: string,
    content: string,
    name: string
}

export default Blog;