import React, { Component } from 'react';
import Button from './button';
import CalcTitle from './calc_title';
import OutputScreen from './op_screen';

export class Calculator extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             question: '',
             answer : ''
        }

        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(event){
        const value = event.target.value;

        switch (value){
            case '=': {
                
                if(this.state.question !== ''){

                    var ans = '';
                    try{
                        ans = eval(this.state.question);
                    }
                    catch(e){
                        this.setState({answer:"Math Error"});
                    }

                    if(ans===undefined){
                        this.setState({answer:"Math Error"});
                    }
                    else{
                        this.setState({answer : ans, question : ""});
                    }

                    break;
                }
                break;
            }

            case 'Clear' : {
                this.setState({answer : "", question:""});
                break;
            }

            case 'Delete' : {
                var str = this.state.question;
                str = str.substr(0, str.length-1);
                this.setState({question : str});
                break;
            }
            default :{
                this.setState({question : this.state.question + value});
                break;
            }
        } 
    }
    

    render() {
        return (
            <div className = "calcFrame">
                <CalcTitle value = "Click Calculator" />
                <div className ="calcBody">
                    <OutputScreen question = {this.state.question} answer = {this.state.answer} />

                    <div style = {{"height":"50px"}}></div>

                    {/* Button Grid */}

                    <div className="buttonRow">
                        <Button  label = {'Clear'} handleClick = {this.handleClick}/>
                        <Button  label = {'Del'} handleClick = {this.handleClick}/>
                        <Button label = {'.'} handleClick = {this.handleClick}/>
                        <Button label = {'/'} handleClick = {this.handleClick}/>
                    </div>

                    <div className="buttonRow">
                        <Button label = {'7'} handleClick = {this.handleClick}/>
                        <Button label = {'8'} handleClick = {this.handleClick}/>
                        <Button label = {'9'} handleClick = {this.handleClick} />
                        <Button label = {'*'} handleClick = {this.handleClick}/>
                    </div>

                    <div className="buttonRow">
                        <Button label = {'4'} handleClick = {this.handleClick}/>
                        <Button label = {'5'} handleClick = {this.handleClick}/>
                        <Button label = {'6'} handleClick = {this.handleClick}/>
                        <Button label = {'-'} handleClick = {this.handleClick}/>
                    </div>

                    <div className="buttonRow">
                        <Button label = {'1'} handleClick = {this.handleClick}/>
                        <Button label = {'2'} handleClick = {this.handleClick}/>
                        <Button label = {'3'} handleClick = {this.handleClick}/>
                        <Button label = {'+'} handleClick = {this.handleClick}/>
                    </div>

                    <div className="buttonRow">
                        <Button label = {'4'} handleClick = {this.handleClick}/>
                        <Button label = {'5'} handleClick = {this.handleClick}/>
                        <Button label = {'6'} handleClick = {this.handleClick}/>
                        <Button label = {'-'} handleClick = {this.handleClick}/>
                    </div>

                    <div className="buttonRow">
                        <Button label = {'0'} handleClick = {this.handleClick}/>
                        <Button label = {'='} handleClick = {this.handleClick}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Calculator;
