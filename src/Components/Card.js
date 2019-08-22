import React, {Component} from 'react';
//components
import Data from './Data';
import './card.css'
//lord forgive me for this hideous styling
var btn = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: 'white',
    fontSize: '120%',
    fontFamily: `Arial, Helvetica, sans-serif`,
    fontWeight: 'bold',
    marginTop: '2vh'
}
var navButtons = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '8vh'
}

var cardStyle = {
    backgroundColor: 'white',
    height: '400px',
    width: '80vw',
    marginLeft: '10vw',
    marginTop: '12vh',
    fontFamily: 'Arial, Helvetica, sans-serif'
}

var listStyling = {
    listStyleType: 'decimal'
}

class Card extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment = () => {
        this.setState({counter: this.state.counter + 1});
        console.log(this.state.counter)
        if(this.state.counter >= Data.length - 1) {
            this.setState({counter: 0})
        }

    }

    decrement = () => {
        this.setState({counter: this.state.counter - 1});
        if(this.state.counter <= 0) {
            this.setState({counter: Data.length - 1})
        }
    }

    render() {
        let movie = Data[this.state.counter].favoriteMovies.map((val) => <li>{val}</li>)
        return(
            <main style={cardStyle} >
                <h1 >{this.state.counter + 1}/{Data.length}</h1>
                <h1 className='cardText' id='cardName' >{Data[this.state.counter].name.first} {Data[this.state.counter].name.last}</h1>
                <h3 className='cardText' ><b style={{fontWeight: 'bolder'}}>From:</b> <b style={{fontWeight: 'normal'}}>{Data[this.state.counter].city}, {Data[this.state.counter].country}</b></h3>
                <h3 className='cardText' ><b style={{fontWeight: 'bolder'}}>Job Title:</b> <b style={{fontWeight: 'normal'}}>{Data[this.state.counter].title}</b></h3>
                <h3 className='cardText' ><b style={{fontWeight: 'bolder'}}>Employer:</b> <b style={{fontWeight: 'normal'}}>{Data[this.state.counter].employer}</b></h3>

                <h1 className='cardText'>Favorite Movies</h1>
                <ul className='cardText' style={listStyling}>{movie}</ul>

                <div style={navButtons} >
                <button style={btn} onClick={this.decrement} >{'<'}Previous</button>
                <div id='anOTHER-ID' >
                    <button id='cntrbtns'>Edit</button>
                    <button id='cntrbtns'>Delete</button>
                    <button id='cntrbtns' >New</button>
                </div>
                <button style={btn} onClick={this.increment}>Next{'>'}</button>
                
                </div>
            </main>
        )
    }
}

export default Card;