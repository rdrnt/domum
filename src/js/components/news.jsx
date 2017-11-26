import React from 'react';
import NewsHelper from '../helpers/news';

const NewsArticle = (props) => (
    <div>
        <h2>{props.article.title}</h2>
        <p>{props.article.description}</p>
    </div>
);

const News = (props) => {
        return (
            <div className="news">
               {props.articles.map((obj, index) => 
                    <NewsArticle 
                        key={index} 
                        article={obj}
                    /> 
                )}
            </div>
        )
}

export default News;