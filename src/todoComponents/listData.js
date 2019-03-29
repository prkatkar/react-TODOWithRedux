import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
class ListURLData extends Component {

    render() {
        console.log("ListURLData");
        console.log(this.props.data);
        console.log(this.props.selectedUrl);
        if (this.props.data && this.props.selectedUrl && this.props.data.length > 0) {
            const filterItems = this.props.selectedUrl ? this.props.data.filter(x => x.urlName == this.props.selectedUrl) : []
            if (filterItems && filterItems.length > 0) {
                const listItems = filterItems[0].data.map((obj) => {
                    return obj ?
                        <div key={obj.title}>
                            <header>
                                <b> {obj.title} - {obj.pubdate}</b>
                            </header>
                            
                        <p>
                            {obj.description}
                        </p>
                        </div > : ""

            })

            return (
                <div className="blogcontent" >
                    {listItems}
                </div>
            )
        }

    } else {
    return (
        <div >
        </div>
    )
}
    }
}
const mapstateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapstateToProps)(ListURLData);
