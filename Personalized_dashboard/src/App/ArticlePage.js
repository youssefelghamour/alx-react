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
import NewsSectionGrid from "../News/NewsSectionGrid";
import Updates from "../News/Updates";
import { GoClock } from "react-icons/go";
import News from "../News/News";



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
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (this.props.article && this.props.article.title && this.props.article !== prevProps.article) {
            document.title = `Holberton School - ${this.props.article.title}`;
        }
    }

    render () {
        // Get the article Id from URL params and nameit articleId
        const { id: articleId } = this.props.params;
        const { article } = this.props;

        return (
            <Fragment>
                <Header isHomePage={false}/>
                
                { article ? (
                    <div className={css(styles.body)}>

                        <BodySection>
                            <NewsSectionGrid>
                                <div>
                                    <p className={css(styles.path)}>Home / News / {article.title}</p>
                                    <p className={css(styles.date)}><GoClock /> {article.date}</p>

                                    <img src={`/${article.image}`} alt="Article Image" className={css(styles.image)} />

                                    <h1 className={css(styles.title)}>{article.title}</h1>
                                    <h2 className={css(styles.subtitle)}>{article.subtitle}</h2>
        
                                    <div className={css(styles.content)} dangerouslySetInnerHTML={{ __html: article.content }} />

                                    <button onClick={() => this.props.navigate("/")} className={css(styles.backHomeButton)}>Back to Home</button>
                                </div>

                                <div style={{padding: '20px'}}>
                                    <Updates />
                                </div>
                            </NewsSectionGrid>
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
        margin: '40px 15px 15px',
        fontFamily: 'Poppins, sans-serif',
        //width: '75%',
        justifySelf: 'center',
        minHeight: '70vh',
    },

    path: {
        margin: '0',
        fontSize: '13px',
        color: '#b8b8b8',
    },

    date: {
        display: 'flex',
        gap: '7px',
        alignItems: 'center',
        marginTop: '4px',
    },

    image: {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
        transition: 'transform 0.3 ease',

        ':hover': {
            transform: 'scale(101%)',
        },
    },

    title: {
        margin: '8px 0 0',
    },

    subtitle: {
        marginTop: 0,
        fontWeight: '100',
        fontSize: '19px',
        color: 'grey',
    },

    content: {
        fontSize: '0.9rem',
    },

    backHomeButton: {
        border: 'none',
        backgroundColor: '#b7b7b74f',
        padding: '8px 16px',
        fontWeight: 'bold',
        borderRadius: '25px',
        cursor: 'pointer',

        ':hover': {
            backgroundColor: 'grey',
            color: 'white',
        },
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