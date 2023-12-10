const apikey = '3ce522cceaba476ba2495703d6c368b1';
const apiurl = 'https://newsapi.org/v2/everything?q=tesla&from=2023-11-10&sortBy=publishedAt&apiKey='+apikey;
const articleList = document.getElementById('articles-list');
fetch(apiurl)
    .then(response=>{
        return response.json();
    }).then(data=>{
        displayArticles(data.articles);
    }
    )

function displayArticles(articles){
    articleList.innerHTML = '';
    articles.forEach(
        article=>{
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            const image = document.createElement('img');
            image.src = article.urlToImage;
            image.alt = 'Article Image';
            const title = document.createElement('h2');
            title.textContent = article.title;
            const description = document.createElement('p');
            description.textContent=article.description;
            const link = document.createElement('a');
            link.href=article.url;
            link.textContent='read more...'
            link.target='_blank';

            articleElement.appendChild(image);
            articleElement.appendChild(title);
            articleElement.appendChild(description);
            articleElement.appendChild(link);

            articleList.appendChild(articleElement);
        }
    );
}
