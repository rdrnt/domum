import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NewsHelper from '../helpers/news';

class News extends React.Component {
    constructor(props) {
        super(props);
        console.log('The props are', props);

        this.state = {
            articles: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('Next props are', nextProps);
    }

    render() {
        return (
            <div className="news">
                hey
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('The state form ppq', state);
    return {
        articles: state.common.articles,
    }
}

export default connect(mapStateToProps)(News);