import React from 'react';
import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      input:"",
      previousNumber:"",
      currentNumber:"",
      operator:"",
    }
  }

  addToInput = (value) =>{
    this.setState({input : this.state.input + value })
  }

  addZeroToInput = (value) =>{
    if(this.state.input !== ""){
      this.setState({input:this.state.input + value})}
  }
   
   addDecimal = (value) =>{
    if(this.state.input.indexOf(".") === -1 && this.state.input !==""){
      this.setState({input:this.state.input + value})
    }
  } 
    ClearInput = () =>{
      this.setState({input: ""})
    }

    add =()=>{
    this.state.previousNumber = this.state.input; 
    this.setState({input:""})
    this.state.operator ="plus"
  }
  division = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input:''})
    this.state.operator = 'division'
  }


  minus =()=>{
    this.state.previousNumber = this.state.input; 
    this.setState({input:""})
    this.state.operator ="minus"
  }
  multiply = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input:""})
    this.state.operator = "multiply"
  }
  evaluate =()=>{
    this.state.currentNumber = this.state.input;
    this.setState({input:""})
    if(this.state.operator == "plus"){
      this.setState({
        input:parseInt(this.state.previousNumber)+parseInt(this.state.currentNumber)
      })
    }else if(this.state.operator =="minus"){
      this.setState({
        input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber) 
      })
    }else if(this.state.operator =="multiply"){
      this.setState({
        input:parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
      })
    }else if(this.state.operator =="division"){
      this.setState({
        input:parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
  })
}}


  render(){
    return(
      <div className = "app">
        <h1>Calculator</h1>
        <div className="calc-wrapper">
        <div className="row">
    <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button HandleClick = {this.addToInput}>7</Button>
            <Button HandleClick = {this.addToInput}>8</Button>
            <Button HandleClick = {this.addToInput}>9</Button>
            <Button HandleClick = {this.division}>/</Button>
          </div>
          <div className="row">
            <Button HandleClick = {this.addToInput}>4</Button>
            <Button HandleClick = {this.addToInput}>5</Button>
            <Button HandleClick = {this.addToInput}>6</Button>
            <Button HandleClick = {this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button HandleClick = {this.addToInput}>1</Button>
            <Button HandleClick = {this.addToInput}>2</Button>
            <Button HandleClick = {this.addToInput}>3</Button>
            <Button HandleClick = {this.add}>+</Button>
          </div>
          <div className="row">
            <Button HandleClick={this.addDecimal}>.</Button>
            <Button HandleClick = {this.addZeroToInput}>0</Button>
            <Button HandleClick={this.evaluate}>=</Button>
            <Button HandleClick={this.minus}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.ClearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
