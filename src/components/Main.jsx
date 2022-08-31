import './Main.css';
import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';

class Main extends Component {
    render() {
        return (
            <main className="main-container">
                <Editor />
                <Preview />
            </main>
        );
    }
}

export default Main;