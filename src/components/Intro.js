import React from 'react';
import {Link} from 'react-router-dom';

const Intro = ()=>{
return(
    <React.Fragment>
            <div style={{margin:'25% auto'}} className="container form_design">
            <h1 className="display-4 text-center">Qizz'Js'Quizz</h1>
            <p className="h4 text-center">
                Hey guys!If you are programmer and you are fond of <strong>Javascript</strong> ,then this your playground to test depth and
                knowledge of your's in it.Give it a shot
            </p>
            <h6>Instructions</h6>
            <ul>
                <li>
                    There are 20 questions.
                </li>
                <li>
                Each question is given 1 minute time
                </li>
            </ul>
            <div className="btn-align">
            <Link to = {`/quizground`}>
            <button type="button" class="btn btn-warning text-center btn-align ">
             Start To Play
            </button>  
            </Link>
            </div>
            </div>
    </React.Fragment>
)
}

export default Intro;