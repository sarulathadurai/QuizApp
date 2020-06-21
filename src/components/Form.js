import React from 'react';


const Form = (props) => {
    const {id,ques,c1,c2,c3} = props.ques;
    
    const isChoice_1 = props.answer === c1 ? true:false;
    const isChoice_2 = props.answer === c2 ? true:false;
    const isChoice_3 = props.answer === c3 ? true:false;
    const color = {
        backgroundColor:'#078435'   
    }
    return(
        <div key = {id} className="container">
            
        <pre className="prettyprint form_design">
    
         <div className="card card-body form_design">
         {ques}
         </div>         
         </pre>
        <div> 
            <button type="button" style={isChoice_1?{backgroundColor:'#078435'}:{backgroundColor:'#2d2e30'}} className="btn  btn-lg btn-block form_design" name={c1}  onClick ={props.onClick}>{c1}</button>
            <button type="button" style={isChoice_2?{backgroundColor:'#078435'}:{backgroundColor:'#2d2e30'}} className="btn  btn-lg btn-block form_design" name={c2}  onClick ={props.onClick}>{c2}</button>
            <button type="button" style={isChoice_3?{backgroundColor:'#078435'}:{backgroundColor:'#2d2e30'}} className="btn  btn-lg btn-block form_design" name={c3}  onClick ={props.onClick}>{c3}</button>
        </div>            
        
    </div>
    );


}

export default Form;