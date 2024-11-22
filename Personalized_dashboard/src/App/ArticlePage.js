import React, { Component, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import BodySection from "../BodySection/BodySection";
import { css, StyleSheet } from "aphrodite";
import { Footer } from "../Footer/Footer";
import { connect } from "react-redux";
import { getNews, getNewsById } from "../selectors/newsSelector";
import { fetchNews } from "../actions/newsActionCreators";


/* HOC that adds URL params to a class component,
   since useParams hook only works on function components in v6 of react router dom
*/

// Function wraps a component to inject URL params
const withParams = (WrappedComponent) => {
    // Returns wrapped component with new functionality
    return function WithParams(props) {

        // Extracts URL parameters using 'useParams' hook
        const params = useParams();

        // 'useNavigate' hook provides navigation function, allowing us to redirect
        const navigate = useNavigate();

        // Passes original props and adds URL params as props
        return <WrappedComponent {...props} params={params} navigate={navigate}/>;
    };
};


class Article extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Adds new to the redux store
        this.props.fetchNews();
    }

    render () {
        // Get the article Id from URL params and nameit articleId
        const { id: articleId } = this.props.params;

        return (
            <Fragment>
                <Header isHomePage={false}/>
                
                { this.props.article ? (
                    <div className={css(styles.body)}>

                        <BodySection subtitle="News from the School">
                            <div>
                                <h1 className="articleTitle">{this.props.article.title}</h1>

                                <div className="article-content">
                                    <img src={`/${this.props.article.image}`} alt="Article Image" className={css(styles.articleImage)} />
                                    <div>
                                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Cras natoque leo mi himenaeos mattis.</p>
                                        <p><strong>Subheading 1:</strong> Here is a subheading with more details:</p>
                                        <ul>
                                            <li>Point 1</li>
                                            <li>Point 2</li>
                                            <li>Point 3</li>
                                        </ul>
                                        <p>End of the article content</p>
                                    </div>
                                </div>

                                <button onClick={() => this.props.navigate("/")} className="backHomeButton">Back to Home</button>
                            </div>
                        </BodySection>
                    </div>
                ) : (null)}
                

                <div className={css(styles.footer)} >
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        display: 'block',
        margin: '15px',
        fontFamily: 'Poppins, sans-serif',
        width: '75%',
        justifySelf: 'center',
        minHeight: '70vh',
    },

    articleImage: {
        width: '200px',
    },

    footer: {
        //position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center',
        fontSize: '1rem',
        fontFamily: 'sans-serif',
        fontWeight: 400,
        borderTop: 'solid 3px #e0354b',
        fontStyle: 'italic',
    },
});

const mapStateToProps = (state, ownProps) => {
    // Get the id from the link
    const newsId = ownProps.params.id;

    // Get all the news
    const news = getNews(state);

    // Get the article by id from the news
    const article = newsId && news.size > 0 ? getNewsById(state, newsId) : null;

    return {
        article: article
    };
};

export const mapDispatchToProps = {
    fetchNews,
};

export default withParams(connect(mapStateToProps, mapDispatchToProps)(Article));