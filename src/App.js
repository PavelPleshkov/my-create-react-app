// https://max-frontend.gitbook.io/react-course-ru-v2/create-react-app/priborka-i-importi
// npx create-react-app my-app
// cd my-app
// npm install --save prop-types // if needed
// npm start

import React from 'react'; // подключение библиотеки React
// import PropTypes from 'prop-types';

// import { Article } from './components/Article';
import { News } from './components/News';
import { Add } from './components/Add';

import './App.css'; // подключение файла стилей

// import newsData from './data/newsData.json';

class App extends React.Component {
    state = {
        news: null, // было newsData
        isLoading: false // статус для манипуляций "прелоадером" ("Загружаю..." в нашем случае)
    }
    // state ={
    //     news: newsData,
    // }

    handleAddNews = (data) => {
        // console.log('я вызвана из Add, но имею доступ к this.state у App!', this.state);
        const nextNews = [data, ...this.state.news];

        this.setState({news: nextNews});
    }

    static getDerivedStateFromProps(props, state) {
        let nextFilteredNews
    
        // смотрим в state.news (ранее смотрели в props)
        // и проверяем, чтобы не клоинировать null
        // например, в момент первой отрисовки
        if (Array.isArray(state.news)) {
            nextFilteredNews = [...state.news]

            nextFilteredNews.forEach((item, index) => {
            if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
                item.bigText = 'СПАМ'
            }
            })

            return {
            filteredNews: nextFilteredNews,
            }
        }

        return null
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('http://localhost:3000/data/newsData.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTimeout(() => {
                    this.setState({ isLoading: false, news: data })
                }, 1000) // изменил таймер на 1000, чтобы не ждать долго
            })
    }
    // componentDidMount() {
    //     // const {isLoading, news} = this.state;
    //     // isLoading = true;
    //     this.setState({isLoading: true});

    //     fetch('http://localhost:3000/data/newsData.json')
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             //искусственная задержка 3 с:
    //             setTimeout(() => {
    //                 this.setState({
    //                     isLoading: false,
    //                     news: data
    //                 });
    //             }, 3000);
                
    //             // this.setState({
    //             //     isLoading: false,
    //             //     news: data
    //             // });
    //             console.log(this);
    //             console.log('приехали данные', data);
    //         })
    // }

    render() {
        const {news, isLoading} = this.state;

        return (
            <React.Fragment>
                <Add onAddNews = {this.handleAddNews}/>
                <h3>Новости</h3>
                {isLoading && <p>Загружаю...</p>}
                {Array.isArray(news) && <News data={news} />}
                {/*<News data={this.state.news}/>*/} {/* добавили свойство data */}
            </React.Fragment>
        )
    }
}

export default App;