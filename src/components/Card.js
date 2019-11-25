import React, { Component } from 'react';


export default class Card extends Component {
    state = {
        vote : {
            name : '',
            vote : '',
        },
        showBtn : false
    }

    updateVote = (vote) => {
        this.setState({
            vote : { 
                "name": this.props.name,
                "subtitle": this.props.subtitle,
                "description": this.props.description,
                "image": this.props.image,
                "thumbUp": vote === 'thumbUp' ? this.props.thumbUp + 1 : this.props.thumbUp,
                "thumbDown": vote === 'thumbDown' ? this.props.thumbDown + 1 : this.props.thumbDown,
            }
        })  
    }

    renderButtons = () => {
        console.log('this.state.showBtn', this.state.showBtn)
        if(this.state.showBtn === true){
            return  <div className="row justify-vertical">
                        <button 
                        onClick={() => this.updateVote('thumbUp')}
                        type="button"
                        className="thumb-vote justify-vertical" 
                        style={{ backgroundColor:'rgba(38, 156, 137, 0.6)'}}>
                            <i className="fas fa-thumbs-up white icon-thumb-small"></i>
                        </button> 
                        <button
                            onClick={() => this.updateVote('thumbDown')}
                        type="button"
                        className="thumb-vote" style={{ backgroundColor:'rgba(226, 166, 35, 0.6)'}}>
                            <i className="fas fa-thumbs-down white icon-thumb-small"></i>
                        </button> 
                        <button 
                        onClick={() => {
                            this.setState({showBtn : false});
                            this.props.sendVote(this.state.vote)
                        }}
                        style={{marginLeft:10}} 
                        type="button" 
                        className="btn btn-outline-white">Vote now</button>
                    </div>
        } else if(this.props.thumbDown === 0 && this.props.thumbUp === 0 ){
            return  <div className="row justify-vertical">
                        <button 
                        onClick={() => this.updateVote('thumbUp')}
                        type="button"
                        className="thumb-vote justify-vertical" 
                        style={{ backgroundColor:'rgba(38, 156, 137, 0.6)'}}>
                            <i className="fas fa-thumbs-up white icon-thumb-small"></i>
                        </button> 
                        <button
                            onClick={() => this.updateVote('thumbDown')}
                        type="button"
                        className="thumb-vote" style={{ backgroundColor:'rgba(226, 166, 35, 0.6)'}}>
                            <i className="fas fa-thumbs-down white icon-thumb-small"></i>
                        </button> 
                        <button 
                         onClick={() => {
                            this.setState({showBtn : false});
                            this.props.sendVote(this.state.vote)
                        }}
                        style={{marginLeft:10}} 
                        type="button" 
                        className="btn btn-outline-white">Vote now</button>
                    </div>
        } else {
            return  <button 
                    onClick={() => this.setState({showBtn : true})}
                    style={{marginLeft:10}} 
                    type="button" 
                    className="btn btn-outline-white">Vote again</button>
        }

    }

    render() {
        const imageUrl = require(`../assets/${this.props.image}.jpg`);
        let thumbUp = this.props.thumbUp / (this.props.thumbUp + this.props.thumbDown);
        let thumbDown = this.props.thumbDown / (this.props.thumbUp + this.props.thumbDown);
        return (
                <div style={{ backgroundImage: `url(${imageUrl})` }} className="main col-lg-4 col-md-1 col-sm-1" id="card">
                    <form style={{marginTop:35}}>
                        <div className="row">
                            <div>
                                { this.props.thumbsUp > this.props.thumbsDown ?
                                    <div style={{ backgroundColor:'rgba(38, 156, 137, 0.6)'}}>
                                        <i className="fas fa-thumbs-up white icon-thumb-small"></i>
                                    </div> 
                                    :
                                    <div style={{ backgroundColor:'rgba(226, 166, 35, 0.6)'}}>
                                        <i className="fas fa-thumbs-down white icon-thumb-small"></i>
                                    </div> 
                                }
                            </div>
                            <h1 className="white title">{this.props.name}</h1>
                        </div>
                        <p style={{fontSize:12, marginTop:-10}} className="white">{this.props.subtitle}</p>
                        <p className="white">{this.props.description}</p>
                        { this.renderButtons()}
                    </form> 
                    <div className="row footerPope">
                        <div style={{ width: thumbUp ? `${thumbUp * 100 }%` : `${thumbUp * 0 }%` }} className="buttonThumbUp">
                            <i className="fas fa-thumbs-up white icon-thumb-medium">{thumbUp ? (thumbUp * 100).toFixed(2) : 0}%</i>             
                        </div>
                        <div style={{width: thumbDown ? `${thumbDown * 100 }%` : `${thumbDown * 0 }%`}} className="buttonThumbDown">
                            <i className="fas fa-thumbs-down white icon-thumb-medium">{thumbDown ? (thumbDown * 100).toFixed(2) : 0 }%</i>
                        </div>
                    </div>           
                </div>      
        );
    }
}