import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? (
          <ColorBox opacity={Math.round((this.props.opacity - 0.1)*10)/10} /> 
        ) : (
          null
        )}
      </div>
    )

    // return (
    //   <div className="color-box" style={{opacity: 2}}>
    //     {this.props.opacity >= 0.2 ? <ColorBox opacity={Math.round((this.props.opacity - 0.1)*10)/10} /> : null}
    //   </div>
    // )

    // if (this.props.opacity >= 0.2) {
    //   return (
    //     <div className="color-box" style={{opacity: 2}}>
    //       <ColorBox opacity={this.props.opacity - 0.1} />
    //     </div>
    //   )
    // } else{
    //   return (
    //     <div className="color-box" style={{opacity: 2}}>
    //     </div>
    //   )
    // }
  }
  
}
