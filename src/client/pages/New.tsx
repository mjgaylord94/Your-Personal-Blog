import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';

const Add = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function submit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        let newPost: {authorid: string, title: string, content: string} = {
            title: title,
            content: content,
            authorid: "1"
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
                            <form id="add-form" action="" style={{display: 'flex', flexDirection: 'column'}}>
                                <h3 id="form-title">
                                    New Post
                                </h3>
                                <input id="title-input" value={title} placeholder="Title" onChange={e => { setTitle(e.target.value) }} />
                                <textarea id="content-textarea" value={content} placeholder="Lyrics" rows={5} onChange={e => { setContent(e.target.value) }}></textarea>
                                <button id="submit-button" className="btn" onClick={submit}>
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