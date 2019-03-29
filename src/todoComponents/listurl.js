import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListURL extends Component {

    constructor() {
        super();
        this.removeURL = this.removeURL.bind(this);
    }

    removeURL(val) {
        //this.setState({ selectedUrl: val });
        if (val) {
            var data = { urlName: val };
            this.props.dispatch({
                type: "DLETE_URL", data
            });
        }

    }
    render() {
        console.log("listURL");
        console.log(this.props.data);
        if (this.props.data && this.props.data.length > 0) {
            this.props.getselectedURL(this.props.data[0].urlName);
            const listItems = this.props.data.map((obj) =>

                obj ?

                    <li key={obj.urlName} >
                       
                            <div className="col-md-6">
                                <span onClick={() => this.props.getselectedURL(obj.urlName)}>    {obj.urlName}   </span>
                            </div>
                            <div className="col-md-6" >
                                <button onClick={() => this.removeURL(obj.urlName)}> X </button>

                            </div>
                        
                    </li>


                    : ""

            );
            return (
                <div className="col-md-12">

                    <ul   >{listItems}  </ul>
                </div>
            )
        }
        else {
            return (
                <div ></div>
            )
        }
    }
}
const mapstateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapstateToProps)(ListURL);
