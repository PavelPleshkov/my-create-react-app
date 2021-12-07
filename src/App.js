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

    render() {
        return (
            <React.Fragment>
                <Add onAddNews = {this.handleAddNews}/>
                <h3>Новости</h3>
                <News data={this.state.news}/> {/* добавили свойство data */}
            </React.Fragment>
        )
    }
}

export default App;