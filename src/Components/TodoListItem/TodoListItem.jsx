import React, {Component} from 'react';
import './TodoListItem.css'

export default class TodoListItem extends Component {

    state={
        done:this.props.done
    };

     onDone = () => {
         this.setState(({
             done:!this.state.done
         }))
     };

    render(){
        const {done} = this.state;
        const {label, onDeleted} = this.props;
        let classList = "list-group-item d-flex justify-content-between align-items-center";

        if(done){
            classList += ' actives'
        };


        return (
            <div>
                <li className={classList}>
                    {label}
                    <div>
                        <button onClick={this.onDone} className="badge bg-primary rounded-pill">
                            <i className="fa fa-check-circle" />
                        </button>
                        <button className="badge bg-primary rounded-pill"onClick={onDeleted}>
                            <i className="fa fa-trash-o" />
                        </button>
                    </div>
                </li>
            </div>
        );
    }

};


