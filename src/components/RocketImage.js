import React from 'react'; 

export class RocketImage extends React.Component {
  render() {
    var animate = this.props.animate; 
    var wrapperClassNames = animate ? "rocket-image-wrapper rocket-image-wrapper-active" : "rocket-image-wrapper"; 
    var imageClassNames = animate ? "rocket-image rocket-image-active" : "rocket-image"; 
    return ( 
       <div className={wrapperClassNames}>
         <img src={this.props.img} width="100" height="100" alt="rocket" className={imageClassNames}/>
       </div>    
    ) 
  }
}
