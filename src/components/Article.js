import React from "react"; // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types'; // у Article это react и prop-types

class Article extends React.Component {
    state = {
        visible: false, //определили начальное состояние
    }

    handleReadMoreClck = (e) => {
        const {id} = this.props.data;
        e.preventDefault();
        this.setState({visible: true}, () => {
        console.log(`state ${id} has changed`)
        });
    }

    render () {
        const {author, text, bigText} = this.props.data;
        const {visible} = this.state;

        // console.log('render', this);

        return (
            <div className="article">
            <p className="news__author">{author}:</p>
            <p className="news__text">{text}</p>
            {
                !visible ? <a onClick={this.handleReadMoreClck} href="#readmore" className="news__readmore">Подробнее</a> : <p className="news__big-text">{bigText}</p>
            }
            { /* если не visible, то показывай 
                !visible && <a href="#" className='news__readmore'>Подробнее</a>*/
            }
            { /* если visible, то показывай 
                visible && <p className='news__big-text'>{bigText}</p>*/
            }
            </div>
        )
    };
}

// PropTypes не работает с production версией реакта. Эта фича только для разработки, так как валидация - дорогая операция
Article.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
}

export {Article};