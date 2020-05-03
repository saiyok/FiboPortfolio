import React from 'react';
import axios from 'axios';

export default class TestAsset extends React.Component{
    _isMounted = false;
    state = {
        words: [],
    };

    componentDidMount() {
        this._isMounted = true;
        axios.get(`http://localhost:5000`)
            .then(res => {
            if (this._isMounted){
                console.log(res.data);
                this.setState({words: res.data});
                }
            });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return(
            <ul>
                {this.state.words.map(word => <li key={word.id}>{word.word} {word.time}</li>)}
            </ul>
        )
    }
}