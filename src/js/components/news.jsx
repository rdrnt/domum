import React, { Component } from 'react';
import NewsHelper from '../helpers/news';

const News = () => {
    return (
        <div>
            {NewsHelper.get(data => console.log(data))}
            <p>this is the news!</p>
        </div>
    );
}

export default News;