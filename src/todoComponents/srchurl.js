import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import ListURL from './listurl.js';
import ListURLData from './listData.js'
class SearchURL extends Component {
    constructor() {
        super();
        this.state = { searchUrl: "", selectedUrl: "" };
        this.getURLdata = this.getURLdata.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.getselectedURL = this.getselectedURL.bind(this);
    }

    getselectedURL(val) {
        console.log("data from child:" + val);
        this.setState({ selectedUrl: val });

    }
    getURLdata(e) {

        console.log(this.state.searchUrl);
        this.setState({ selectedUrl: "" });
        if (this.state.searchUrl) {

            axios.get(this.state.searchUrl)
                .then(data =>

                    data.data.items.map(result => ({
                        title: result.title,
                        pubdate: result.pubDate,
                        description: result.description
                    }))


                ).then(resp => {
                    const ToDoData = [];
                    if (resp) {

                        var data = { url: this.state.searchUrl, urlName: (this.state.searchUrl.split('=')[1] ? this.state.searchUrl.split('=')[1] : this.state.searchUrl), data: resp };
                        //ToDoData.push(data);
                        this.props.dispatch({
                            type: "ADD_URL", data
                        });

                    }
                    this.setState({ searchUrl: "" });
                    // console.log(resp);
                    // console.log(data);

                }

                ).catch(error => {
                    this.setState({ searchUrl: "" });
                    alert(error);
                }
                );

        }
    }
    handleUrlChange(event) {
        this.setState({ searchUrl: event.target.value });
    }
    render() {



        return (
            <div className="App">
                <header>
                    <div>My TODO</div>
                </header>
                <div className="row lightBorder fullheight">
                    <div className="col-md-3 thikborder divheight" >
                        Search
                <div className="row borderbottom">
                            <div className="col-md-2" >
                                <input type="text" value={this.state.searchUrl}
                                    onChange={this.handleUrlChange} placeholder="URL" />

                            </div>
                            <div className="col-md-2 schbtn" >
                                <button disabled={!this.state.searchUrl} onClick={this.getURLdata}> search </button>
                            </div>
                        </div>

                        <div className="row mr-left">
                            <ListURL getselectedURL={this.getselectedURL} />
                        </div>
                    </div>
                    <div className="col-md-6 divheight">
                        <ListURLData selectedUrl={this.state.selectedUrl} />
                    </div>
                </div>


            </div>
        )
    }
}


export default connect()(SearchURL);
