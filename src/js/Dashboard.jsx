import React, { Component } from 'react';

import News from './components/news';

import { commonActions } from './actions';
import store from './store';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: [],
        };
    };

    componentDidMount() {
        store.dispatch(commonActions.getNews());
    }
    render() {
        const { news } = this.state;
        
        return (
            <div className="dashboard">
                <News articles={news}/>
            </div>
        )
    }
}

export default Dashboard;