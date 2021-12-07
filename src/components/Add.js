import React from "react";
import PropTypes from 'prop-types';

//Controlled components
// class TestInput extends React.Component {
//   state = {
//     inputValue: '',
//   }

//   onChangeHandler = (e) => {
//     this.setState({inputValue: e.currentTarget.value})
//   }

//   onBtnClickHandler = (e) => {
//     alert(this.state.inputValue);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <input className="test-input" onChange={this.onChangeHandler} value={this.state.inputValue} placeholder="введите значение"/>
//         <button type="button" onClick={this.onBtnClickHandler}>Показать alert</button>
//       </React.Fragment>
//     )
//   }
// }

//Uncontrolled Components
class Add extends React.Component {
    state = { //adding initial state
        name: '',
        text: '',
        bigText: '',
        agree: false
    }

    onBtnClickHandler = (e) => {
        e.preventDefault();

        const {name, text, bigText} = this.state;

        // alert(`${name}\n${text}`);
        this.props.onAddNews({
        id: +new Date(),
        author: name,
        text,
        bigText
        });
    }

    // handleNameChange = (e) => {
    //   this.setState({name: e.currentTarget.value});
    // }

    // handleTextChange = (e) => {
    //   this.setState({text: e.currentTarget.value});
    // }

    handleChange = (e) => {
        const {id, value} = e.currentTarget;

        this.setState({[id]: value})
    }

    handleCheckboxChange = (e) => {
        this.setState({agree: e.currentTarget.checked});
    }

    validate = () => {
        const {name, text, bigText, agree} = this.state;

        if (name.trim() && text.trim() && bigText.trim() && agree) {
        return true;
        }

        return false;
    }

    render() {
        const {name, text, bigText} = this.state;

        return (
            <form className="add">
            <input id="name" type="text" className="add__author" onChange={this.handleChange} value={name} placeholder="Ваше имя"/>
            <textarea id="text" className="add__text" onChange={this.handleChange} value={text} placeholder="Текст новости"></textarea>
            <textarea id="bigText"className="add__text" onChange={this.handleChange} value={bigText} placeholder="Полный текст новости"></textarea>
            <label className="add__checkrule">
                <input type="checkbox" name="add__agree" id="" onChange={this.handleCheckboxChange}/>Я согласен с правилами
            </label>
            <button 
                className="add__btn" 
                type="button" 
                onClick={this.onBtnClickHandler} 
                disabled={!this.validate()}>
                Показать alert
                </button>
            </form>
        )
    }
}

Add.propTypes = {
    onAddNews: PropTypes.func.isRequired, // func используется для проверки передачи function}
}

export {Add};