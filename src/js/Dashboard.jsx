import React, { Component } from 'react';
import News from './components/news';

import NewsHelper from './helpers/news';

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
        return (
            <div>
                <News />
            </div>
        )
    }
}

export default Dashboard;