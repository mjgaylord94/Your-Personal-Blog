import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Header from '../components/Header';

const Edit = () => {
    const history = useHistory();
    const { id }: {id: string} = useParams()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const getChirp = async () => {
        let r = await fetch(`/api/blogs/${id}`);
        let blog = await r.json();
        setTitle(blog.title);
        setContent(blog.content)
    }

    useEffect(() => {getChirp();}, [])

    async function submit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        let newBlog: {id: string, title: string, content: string} = {
            id: id,
            title: title,
            content: content,
        }

        await fetch(`/api/blogs/${id}`, {
            method: "PUT",
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(newBlog)
        });

        history.goBack()
    }

    async function remove(e: { preventDefault: () => void; }) {
        e.preventDefault();

        await fetch(`/api/blogs/${id}`, {
            method: "DELETE",
            headers: {'Content-type': 'application/json'},
        });

        history.goBack()
        history.goBack()
    }

    return (
        <>
            <div>
                <Header></Header>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div id="form-container">
                            <form id="edit-form" action="" style={{display: 'flex', flexDirection: 'column'}}>
                                <h3 id="form-title">
                                    Edit Blog Post
                                </h3>
                                <input id="titlename-input" value={title} onChange={e => { setTitle(e.target.value) }} />
                                <textarea id="content-textarea" value={content} rows={5} onChange={e => { setContent(e.target.value) }}></textarea>
                                <button id="delete-button" className="btn btn-danger m-2" onClick={remove}>
                                    Delete Post
                                </button>
                                <button id="submit-button" className="btn m-2" onClick={submit}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;