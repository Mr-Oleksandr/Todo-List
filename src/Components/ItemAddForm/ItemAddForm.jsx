import React, {Component} from 'react';
import './ItemAddForm.css'
export default class  ItemAddForm extends Component{
    state={
        text:''
    };

    onInputChange = (e) => {
        const text = e.target.value
        this.setState(({
            text:text
        }))
    };
    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.text !== ''){
            this.props.onItemAdded(this.state.text)
        }
        this.setState(({
            text:''
        }))
    };

    render(){
        const {text} = this.state
        return (
            <div>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="inputDefault">New Task</label>
                    <form onSubmit={this.onSubmit} className='form-input'>
                        <input value={text} onChange={this.onInputChange} type="text" className="form-control" placeholder="New Task" id="inputDefault"/>
                        <button className="badge bg-primary rounded-pill">
                            <i className="fa fa-plus-circle" />
                        </button>
                    </form>
                </div>
            </div>
        );
    }

};


