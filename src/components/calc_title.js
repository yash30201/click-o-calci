import React from 'react'

const CalcTitle = (props) => {
    return (
        <div className="titleFlex">
            <div className="calcTitle">
                {props.value}
            </div>
        </div>
    )
}

export default CalcTitle;
