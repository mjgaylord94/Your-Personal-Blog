import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }: {blog: any}) => {
    return (
        <>
            <li className="list-group-item">
                <h3>{blog.title}</h3>
                <h6>By: {blog.name}</h6>
                <br />
                <Link to={`/details/${blog.id}`} id="detail-button" className="btn btn-secondary">Details</Link>
            </li>

        </>
    )
};

export default BlogCard