import React, { Component } from 'react';
import '../App.css';
import  Card  from '../components/Card';
import { CardInfo } from '../components/CardInfo';

const data = require('../data/votes.json');

export default class Home extends Component {
    state = {
        votes : null,
        showInfo: true
    }
    componentDidMount(){
        const votes = localStorage.getItem('votes');
        if(!votes){
            localStorage.setItem('votes', JSON.stringify(data));
            this.setState({votes : data});
        } else {
            this.setState({votes : JSON.parse(votes)});
        }
    }

    SendVote = (vote) => {
        let votes = JSON.parse(localStorage.getItem('votes'));
        for (let i = 0; i < votes.length; i++) {
            if(votes[i].name === vote.name){
                votes[i] = vote
            }
            
        }
        localStorage.setItem('votes', JSON.stringify(votes));
        this.setState({votes : votes})
        alert("Thank you for voting!");
    }

    render(){
        if( this.state.votes !== null ){
            return(
                <div>
                    { this.state.showInfo ?
                        <CardInfo action={() => this.setState({showInfo : false})} />
                        :
                        <div></div>
                    }
                    <div style={{marginLeft:'15%'}}>
                        <h1>Votes</h1>
                    </div>
                    <div className="row" style={{alignItems:'center',  justifyContent:'center', marginTop:-40}}>
                        { this.state.votes.map((item,key) =>
                            <Card 
                            key={key}
                            name={item.name} 
                            subtitle={item.subtitle} 
                            description={item.description}
                            image={item.image} 
                            thumbUp={item.thumbUp}
                            thumbDown={item.thumbDown}
                            sendVote = { (vote) => this.SendVote(vote) }/>
                        )}
                    </div>
                </div>
            )
        } else {
            return <div style={{textAlign:'center', marginTop:10, marginBottom:10}} className="fa-3x">
                        <i className="fas fa-spinner fa-spin"></i>
                    </div>
        }
       
    }
}