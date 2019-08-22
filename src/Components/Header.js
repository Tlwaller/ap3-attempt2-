import React, {Component} from 'react';
//styling
var divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '15vh',
    backgroundColor: 'rgb(45, 155, 213)',
    marginTop: '0vh'
} 

var headerStyle = {
    marginLeft: '5vw'
}

function Header(){

        return(
            <div style={divStyle} >
                <h2 style={headerStyle} >Home</h2>
            </div>
        )
}

export default Header;