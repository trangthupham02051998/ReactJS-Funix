import React, {Component} from "react";

class CommentFormComponent extends Component {
    state = {
        rating: '',
        author: '',
        comment: ''
    }
    constructor(props) {
        super(props)
    }

    onSubmit() {
        this.props.postComment(this.state.rating, this.state.author, this.state.comment)
    }

    render() {
        return <div className={'form'}>
            <div className='form-group'>
            <input type="text" className='form-control' placeholder='Nhập comment' value={this.state.comment} onChange={e => this.setState({comment: e.target.value})}/>
            </div>
            <div className='form-group'>
            <input type="text" className='form-control' placeholder='Nhập tên author' value={this.state.author} onChange={e => this.setState({author: e.target.value})} />
            </div>
            <div className='form-group'>
            <input type="number" className='form-control' placeholder='Nhập rate' value={this.state.rating} onChange={e => this.setState({rating: e.target.value})} />
            </div>
            <button className="btn btn-primary" onClick={() => this.onSubmit()}>Gửi</button>
        </div>
    }
}

export default CommentFormComponent 