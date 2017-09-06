import React from 'react'; 

export class RocketImage extends React.Component {
  render() {
    return ( 
       <div className="rocket-image-wrapper">
         <img src={this.props.img} width="100" height="100" alt="rocket" className="rocket-image"/>
       </div>    
    ) 
  }
}
