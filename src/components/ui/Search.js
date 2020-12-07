import React, { Component } from 'react';

class Search extends Component {

    state = {
        text: ''
    }

    onChange = q => {
        this.setState({...this.state, text: q});
        this.props.getQuery(q);
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <section className='search'>
              <form onSubmit={(e) => this.onSubmit(e)}>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search characters'
                  value={this.state.text}
                  onChange={(e) => this.onChange(e.target.value)}
                  autoFocus
                />
              </form>
            </section>
          )
    }
}

export default Search;
