import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewsHelper from '../helpers/news';

const NewsArticle = (props) => {
    const { title, thumbnail } = props;
    return (
        <div className="news__article">
            <h1 className="headline">{title}</h1>
            <img className="thumbnail" src={thumbnail} alt=""/>
        </div>
    );
};

class News extends React.Component {
    constructor(props) {
        super(props);
        console.log(process.env);
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
                { articles.map((article, index) => (
                    <NewsArticle
                        title={article.title}
                        thumbnail={article.thumbnail}
                        key={index}
                    />
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

News.propTypes = {
    dispatch: PropTypes.func.isRequired,
    articles: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

NewsArticle.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(News);