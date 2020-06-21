import React, { Component } from 'react';
import Form from "./Form";
import {Questions} from "../quesList";
import NavBar from "./NavBar";
import FinalScore from "./FinalScore";


class Ques extends Component{
   
    constructor(){
        super();
        this.state = {
            questions:{},
            answer:undefined,
            score:0,
            index:0,
            min:1,
            seconds:0,
            delay:false
       }
    }

    onClick =(e) => {
        this.setState({
            answer:e.target.name,
            index:this.state.index + 1,
            delay:true
        });     
     }

    myInterval = () => { setInterval(() => {

        const { seconds,min } = this.state;
   
        if (seconds === 0 && min === 0) 
          {
            this.setState({
                index: this.state.index + 1
            })
          } 

          if (seconds > 0) {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1
            }))
          }
          else {
            this.setState({
              seconds: 59,
              min:0
            })
          }           
      }, 1000)
    }

    getQuestion = () => {
        const ques = Questions[this.state.index];
        this.setState({
            questions:ques,          
        })
    }
    componentDidMount(){
        this.getQuestion();
        this.myInterval();
     
    }

    componentDidUpdate(prevProps, prevState) {
         
        setTimeout(()=>{
          if(this.state.delay===true && (this.state.answer === this.state.questions.ans)){    
            this.setState({
                score:this.state.score+1
            })
        }

       if (this.state.delay === true && (prevState.index !== this.state.index)) {
            this.getQuestion();
            this.setState({
               seconds: 59,
               delay:false,
               answer:undefined
            })
          }
        },5000)
          }
 
    render(){
        const correctAnswer = this.state.answer === this.state.questions.ans ? this.state.answer : null;

        const wrongAns = (this.state.answer!==undefined) && this.state.answer !== this.state.questions.ans ? 
        (
          <div className="alert bg-danger alertdesign">
            <p className=' h6 text-center'>Right Answer:{this.state.questions.ans}</p>
          </div>):null;
     
        if(this.state.index<20){
            return(
                <React.Fragment>
                  <NavBar min={this.state.min} seconds={this.state.seconds} score = {this.state.score} />
                  <Form onClick={this.onClick} ques={this.state.questions}  answer = {correctAnswer}/>

                  {wrongAns}
                </React.Fragment>       
            )
        }else{
          return (
            <FinalScore score={this.state.score} />
          )
        }
    };
}

export default Ques;