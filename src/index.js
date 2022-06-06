import './main.scss';
import '@csstools/normalize.css';
import Man from './assets/man.png';
import json5 from './assets/data/articles.json5';

function component() {
    return `<div class="article__container">
                <img src="${json5.article_1.img}" />
                <div class="content__container">
                    <h1>${json5.article_1.title}</h1>
                    <p>${json5.article_1.content}</p>
                    <div class="content__author">
                        <img src="${Man}" />
                        <div class="author__info">
                            <h2>${json5.article_1.author}</h2>
                            <p>${json5.article_1.date}</p>
                        </div>
                        <button id="next">Next</button>
                    </div>
                </div>
            </div>`;
}

document.getElementById('content').innerHTML = component();