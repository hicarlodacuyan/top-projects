import './main.scss';
import '@csstools/normalize.css';
import ArticleImage from './ArticleImage';

function component() {
    const element = document.createElement('div');
    element.classList.add('article__container');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content__container');

    const articleHeading = document.createElement('h1');
    articleHeading.innerHTML = 'Shift the overall look and feel by adding these wonderful touches to furniture in your home';

    const articlePara = document.createElement('p');
    articlePara.innerHTML = `Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.`;

    contentContainer.appendChild(articleHeading);
    contentContainer.appendChild(articlePara);

    element.appendChild(ArticleImage());
    element.appendChild(contentContainer);

    return element;
}

document.getElementById('content').appendChild(component());