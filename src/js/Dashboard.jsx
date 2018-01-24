import React, { Component } from 'react';

import News from './components/news';

import NewsHelper from './helpers/news';

import store from './store';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: [],
        };

        setInterval(() => {
            NewsHelper.get((articles) => {
                this.setState({
                    news: articles,
                });
            });
        }, 5000);

    };

    render() {
        const { news } = this.state;
        
        return (
            <div>
                <News articles={news}/>
            </div>
        )
    }
}

export default Dashboard;