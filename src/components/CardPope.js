import React, { Component } from 'react';

class CardPope extends Component {
    render() {
        return (
            <div className="row">
                <div className="col col-lg-5 col-md-5 col-sm-12"  id="container">
                    <form action="">
                    <p className="white" style={{fontSize:12}}>What´s your opinion on</p>
                        <h1 className="white title">Pope Francis?</h1>
                        <p className="white">He´s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
                        <div className="row" style={{paddingLeft:12}}>
                            <i className="fab fa-wikipedia-w white"></i>
                            <p className="white" style={{fontSize:12, textDecoration:'underline'}}>More information</p>
                        </div>
                        <h4 className="white">What´s Your Verdict?</h4>
                    </form> 
                    <div className="row footerPope">
                        <div className="buttonF">
                            <i className="fas fa-thumbs-up white icon-thumb"></i>
                        </div>
                        <div className="buttonR">
                            <i className="fas fa-thumbs-down white icon-thumb"></i>
                        </div>
                    </div>           
                </div>      
           </div>
        );
    }
}

export default CardPope;