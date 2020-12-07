import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

class App extends Component {
    state = {
        items: {},
        isLoading: true,
        query: ''
    };

    componentDidMount() {
        axios.get(`https://www.breakingbadapi.com/api/characters`)
        .then(result => {
            this.setState({...this.state, items: result.data, isLoading: false});
        });
    }

    setQuery = q => {
        this.setState({...this.state, query: q});
        axios.get(`https://www.breakingbadapi.com/api/characters?name=${q}`)
        .then(result => {
            this.setState({...this.state, items: result.data, isLoading: false});
        });
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <Search getQuery={q => this.setQuery(q)}/>
                <CharacterGrid isLoading={this.state.isLoading} items={this.state.items}/>
            </div>
        );
    }
}  

export default App;
