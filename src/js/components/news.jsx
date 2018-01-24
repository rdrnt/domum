import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NewsHelper from '../helpers/news';

class News extends React.Component {
    constructor(props) {
        super(props);
        console.log('News: The props are', props);

        this.state = {
            articles: props.articles,
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('News: Next props are', nextProps);
    }
    render() {
        console.log('News: The state is ', this.state);
        return (
            <div className="news">
                <div className="news__article" />
                <div className="news__article" />
                <div className="news__article" />
                <div className="news__article" />
                <div className="news__article" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('News: mapStateToProps', state);
    return {
        articles: state.common.articles,
    }
}

export default connect(mapStateToProps)(News);