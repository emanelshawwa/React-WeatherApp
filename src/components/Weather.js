import React, { Component } from "react";

class Weather extends Component{
    render(){
        return(
        <div className="info">
            {
               
                 this.props.details.tempreature && 
                 <p className="info_key">Tempreature:
                     <span className="info_value"> {this.props.details.tempreature} </span>
                  </p>
            }
            {
                 this.props.details.city &&
                 <p className="info_key">City:
                     <span className="info_value"> {this.props.details.city}</span>
                 </p>
            }
            {
                 this.props.details.country &&
                 <p className="info_key">Country:
                     <span className="info_value"> {this.props.details.country}</span>
                  </p>
            }
            {
                 this.props.details.humidity && 
                 <p className="info_key">Humidity:
                   <span className="info_value">{this.props.details.humidity} </span>
                  </p>
            }
            {
                 this.props.details.description &&
                 <p className="info_key">Description:
                  <span className="info_value"> {this.props.details.description} </span>
                  </p>
            }
            {
                 this.props.details.error && 
                 <p className="info_key">error:
                <span className="info_value">{this.props.details.error} </span>  
                </p>
            }
        </div>
        );
    }
}
export default Weather;