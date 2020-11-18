export default class NewsAPIServise { 
    constructor() { 
        this.searchQuery = '';//поисковый запрос
        this.page = 1;
    }

    fetchArticles() { 
    const API_KEY = '09c1adb5aad8445fbd87b15fe0c062dc' // ключ API
       return fetch(`https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&page=${this.page}&apiKey=${API_KEY}`)
            .then(r => r.json())
           .then(r => {
               this.page += 1;
               return r.articles
           }); 
    }


    get query() {
        return this.searchQuery
    }
    set query(newSearchQuery) { 
        this.searchQuery = newSearchQuery;
    }

    resetPage() { 
        this.page = 1;
    }
}