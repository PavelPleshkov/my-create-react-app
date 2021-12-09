import React from "react";
import PropTypes from 'prop-types';

import { Article } from "./Article";

class News extends React.Component {
    renderNews = () => {
        const { data } = this.props
        let newsTemplate = null

        if (data.length) {
            newsTemplate = data.map(function(item) {
                return <Article key={item.id} data={item} />
            })
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }

        return newsTemplate
    }

    render() {
        const { data } = this.props

        return (
            <div className="news">
                {this.renderNews()}
                {data.length ? (
                <strong className={'news__count'}>
                    Всего новостей: {data.length}
                </strong>
                ) : null}
            </div>
        )
    }
}

// class News extends React.Component {
//     state = {
//         filteredNews: this.props.data
//     };

//     static getDerivedStateFromProps(props, state) {
//         let nextFilteredNews = [...props.data] // было nextProps - переименовали
      
//         nextFilteredNews.forEach((item, index) => {
//             if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
//                 item.bigText = 'СПАМ'
//             }
//         })
      
//         return { // возвращаем новое состояние
//             filteredNews: nextFilteredNews,
//         }
//     }
//     // static getDerivedStateFromProps(props, state) {
//     //     console.log(props);
//     //     console.log(state);
        
//     //     return {
//     //         filteredNews: props.data,
//     //     }
//     // }

//     // //filtered 'pubg'
//     // componentWillReceiveProps(nextProps) {
//     //     let nextFilteredNews = [...nextProps.data];

//     //     nextFilteredNews.forEach((item, index) => {
//     //         if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
//     //             item.bigText = 'СПАМ';
//     //         }
//     //     })

//     //     this.setState({ filteredNews: nextFilteredNews })

//     //     // console.log({nextProps});
//     //     // console.log({oldProps: this.props})
//     // }

//     // state = {
//     //   counter: 0,
//     // }

//     // handleNewsCountClck = (e) => {
//     //   this.setState({counter: ++this.state.counter});
//     // }

//     //метод renderNews (внутри class) с помощью так называемой "жирной стрелочной функции" (запись вида methodName = () => ...). При такой записи, внутри функции мы не теряем контекст this. То есть, можем обращаться к this.props, например
//     renderNews = () => {
//         const {filteredNews} = this.state; // используем состояние
//         // const {data} = this.props;
//         let newsTemplate = null;

//         if (filteredNews.length) { // везде data заменена на filteredNews
//             newsTemplate = filteredNews.map(function(item) {
//                 return (
//                     <Article key={item.id} data={item}/>
//                     // <div key={item.id}>
//                     //   <p className="news__author">{item.author}:</p>
//                     //   <p className="news__text">{item.text}</p>
//                     // </div>
//                 )
//             });
//         } else {
//             newsTemplate = <p>К сожалению пока новостей нет</p>
//         }

//         // if (data.length) {
//         //     newsTemplate = data.map(function(item) {
//         //         return (
//         //             <Article key={item.id} data={item}/>
//         //             // <div key={item.id}>
//         //             //   <p className="news__author">{item.author}:</p>
//         //             //   <p className="news__text">{item.text}</p>
//         //             // </div>
//         //         )
//         //     });
//         // } else {
//         //     newsTemplate = <p>К сожалению пока новостей нет</p>
//         // }

//         return newsTemplate;
//     }

//     // Почему мы метод render не описываем через жирную стрелочную функцию? Потому что, это метод жизненного цикла react-компонента, и туда this "прокидывает" уже сам react.
//     render() {
//         const {filteredNews} = this.state; // аналогично, используем состояние
//         // const {data} = this.props;
//         // const {counter} = this.state;

//         return (
//             <div className="news">
//                 {this.renderNews()}
//                 {
//                 filteredNews.length ? <strong className="news__count" /*onClick={this.handleNewsCountClck}*/>Всего новостей: {filteredNews.length}</strong> : null
//                 }
//                 {/*
//                 <p>Всего кликов: {counter}</p>*/
//                 }
//             </div>
//         );
//         // return (
//         //     <div className="news">
//         //         {this.renderNews()}
//         //         {
//         //         data.length ? <strong className="news__count" /*onClick={this.handleNewsCountClck}*/>Всего новостей: {data.length}</strong> : null
//         //         }
//         //         {/*
//         //         <p>Всего кликов: {counter}</p>*/
//         //         }
//         //     </div>
//         // );
//     }
// }

// PropTypes не работает с production версией реакта. Эта фича только для разработки, так как валидация - дорогая операция
News.propTypes = {
    data: PropTypes.array.isRequired // PropTypes (с большой буквы) = библиотека prop-types
}

export {News};