import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';

const Add = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorid, setAuthorid] = useState('1')
    const [tagid, setTagid] = useState('1')

    const [authors, setAuthors] = useState([]);
    const [tags, setTags] = useState([]);

    const getAuthors = async () => {
        let r = await fetch(`/api/authors/`);
        let authors = await r.json();
        setAuthors(authors);
    }

    const getTags = async () => {
        let r = await fetch(`/api/tags/`);
        let tags = await r.json();
        setTags(tags);
    }

    useEffect(() => {getAuthors(); getTags();}, [])

    function submit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        let newPost: { title: string, content: string, authorid: string, tagid: string } = {
            title: title,
            content: content,
            authorid: authorid,
            tagid: tagid
        }

        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/api/blogs/', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(newPost))

        history.goBack();
    }

    return (
        <>
            <div>
                <Header></Header>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div id="form-container">
                            <form id="add-form" action="" style={{ display: 'flex', flexDirection: 'column' }}>
                                <h3 id="form-title">
                                    New Post
                                </h3>
                                <input id="title-input" value={title} placeholder="Title" onChange={e => { setTitle(e.target.value) }} />
                                <label>By:</label>
                                <select name="author" id="author-select" onChange={e => { setAuthorid(e.target.value) }}>
                                    {authors.map(author => <option key={`author-${author.id}`} value={author.id}>{author.name}</option>)}
                                </select>
                                <label>Season:</label>
                                <select name="season" id="season-select" onChange={e => { setTagid(e.target.value) }}>
                                    {tags.map(tag => <option key={`tag-${tag.id}`} value={tag.id}>{tag.name}</option>)}
                                </select>
                                <textarea id="content-textarea" value={content} placeholder="Lyrics" rows={5} onChange={e => { setContent(e.target.value) }}></textarea>
                                <button id="submit-button" className="btn btn-dark" onClick={submit}>
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

export default Add;