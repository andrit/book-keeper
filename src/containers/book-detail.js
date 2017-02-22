import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book){
            return <div>Select a book to get started.</div>;
        }
        return(
            <div className="col-md-8">
                <h2 className="kb-title">The ZenMaster Knowledge Base</h2>
                <h3>Library Entry: </h3>
                <div><h4>Book Title: </h4><h1>{this.props.book.title}</h1></div>
                <div><h4>Book Author: </h4><p>{this.props.book.author}</p></div>
                <div><h4>Book Publisher: </h4><p>{this.props.book.publisher}</p></div>
                <div><h4>Category: </h4><p>{this.props.book.category}</p></div>
                <div><h4>Topic: </h4><p>{this.props.book.topic}</p></div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);