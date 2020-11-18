import '../styles/main.css';
import NewsAPIServise from './news-API';//импортируем класс
import articleTpl from '../tamplates/article-tpl.hbs';


//---REFS---
const searchFormRef = document.querySelector('.js-search-form')
const loadMoreBtnRef = document.querySelector('[data-action="load-more"]')
const articleContainerRef = document.querySelector('.js-articles-container')

const newsAPIServise = new NewsAPIServise();//создаем жкземпляр класса

searchFormRef.addEventListener('submit', onClickSearch) //слушатель на первый поиск
loadMoreBtnRef.addEventListener('click', onClickLoadMore)//слушатель на догрузку статей


function onClickSearch(event) { 
    event.preventDefault();//не перезагружаем страницу
    newsAPIServise.query= event.currentTarget.elements.query.value // записываем в свойство класса значение из поисковой строки
    newsAPIServise.resetPage();//сбрасываем номер страницы для нового запроса
    clearMarkup()//очищаем разметку что-бы 1 страница не повторялась
    newsAPIServise.fetchArticles().then(addMarkup);//вызывыаем метод класса, по сути фетч
}

function onClickLoadMore() { 
    newsAPIServise.fetchArticles().then(addMarkup);//вызывыаем метод класса, по сути фетч(значение поисковой строки уже сохранено)
}

function addMarkup(articles) { 
    articleContainerRef.insertAdjacentHTML('beforeend', articleTpl(articles))
}

function clearMarkup() { 
    articleContainerRef.innerHTML = "";
}