import React from 'react';


const FinalScore = ({score}) => {
    return(
        <React.Fragment>
                <div style={{margin:'25% auto'}} className = "container form_design">
                <strong className="text-center">Congratulations!!Your score in this game is</strong>
                <h1 className="display-3 text-center">Score:{score}</h1>
                <strong className=" text-center">Thank you !!</strong>
                </div>
        </React.Fragment>


    )
}

export default FinalScore;