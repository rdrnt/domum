import React, { Component } from 'react';
import News from './components/news';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>hi</h1>
                <News />
            </div>
        )
    }
}

export default Dashboard;