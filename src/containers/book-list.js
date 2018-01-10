import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'
class Booklist extends Component {
    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li
                key={book.title}
                onClick={() => this.props.selectBook(book)}    
                className="list-group-item">
                {book.title}
                </li>
            );
        });
    }
    render(){
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        books:state.books
    };
}

//it specifcly returns an action
//whenever select called, the result should be passed to all reducers
//anything returned here get passes to the container as props
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed to all our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Promote Booklist from a component to a container - it needs to know 
//about this new distantch method. selectBook. make it available
//as a prop
export default connect(mapStateToProps,mapDispatchToProps)(Booklist); 