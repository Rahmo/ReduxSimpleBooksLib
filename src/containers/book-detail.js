import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
 class BookDetail extends Component {
    render(){
        //initial case when 
        if(!this.props.book){
            return <div>please select a book</div>
        }
        return(
            <div> 
                <h3>details for</h3>
                <div>{this.props.book.title}</div>
                {/* <div>{this.props.book.pages}</div> */}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book:state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);