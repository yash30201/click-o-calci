import React from 'react';
import OutputScreenRow from './op_screen_row';

const OutputScreen = (props) => {
    return (
        <div className = "outputScreen">
            <OutputScreenRow value = {props.answer}/>
            <OutputScreenRow value = {props.question} />
        </div>
    )
}

export default OutputScreen;
