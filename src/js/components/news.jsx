import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NewsHelper from '../helpers/news';

class News extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: props.articles,
        };
    }

    componentWillReceiveProps(nextProps) {
        // console.log('News: Next props are', nextProps);
        this.setState({
            articles: nextProps.articles,
        });
    }
    render() {
        // console.log('News: The state is ', this.state);
        const { articles } = this.state;
        return (
            <div className="news">
                { articles.map(article => (
                    <div className="news__article">
                        <p>{article.title}</p>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('News: mapStateToProps', state);
    return {
        articles: state.common.articles,
    }
}

export default connect(mapStateToProps)(News);