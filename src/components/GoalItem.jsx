import React from 'react';
import {connect} from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase'

class GoalItem extends React.Component {
    completeGoal(){
        //add to complete goals
        const {email} = this.props.user;
        const {title, serverKey} = this.props.goal;
        //console.log('serverKey', serverKey);
        goalRef.child(serverKey).remove();
        completeGoalRef.push({email, title});
    }
    render(){
        //console.log('GOALS', this.props.goal);
        const { email, title } = this.props.goal;

        return(
            <div style={{margin: '5px'}}>
                <strong>{title}.</strong>
                <span> submitted by <em>{email}</em></span>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => { this.completeGoal() }}
                >
                    Complete
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const user = state.user;
    return{
        user
    }
}

export default connect(mapStateToProps, null)(GoalItem);