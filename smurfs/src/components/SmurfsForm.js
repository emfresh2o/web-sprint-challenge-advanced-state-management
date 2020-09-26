import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../actions/actions";

const SmurfsForm = (props) =>{
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    })
    const handleChange = e => {
        setSmurf({ ...smurf,[e.target.name]: e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
        props.postSmurfs({...smurf});
        setSmurf({
            name:'',
            age: '',
            height: '',
            id: Date.now()
        })
    }
    return (
        <div>
           <form className="smurf-form">
            <label htmlFor="name"> Name </label>
            <input
                type="text"
                name="name"
                label="name"
                placeholder = "Enter name"
                value = {props.name}
                onChange={handleChange}
                className="smurf-input"
                />
            <label htmlFor="name"> Age </label>
            <input
                type="text"
                name="age"
                label="age"
                placeholder = "Enter age"
                value = {props.age}
                onChange={handleChange}
                className="smurf-input"
                />
            <label htmlFor="name"> Height </label>
            <input
                type="text"
                name="height"
                label="height"
                placeholder = "Enter height (in CM)"
                value = {props.height}
                onChange={handleChange}
                className="smurf-input"
                />
            <button onClick={handleSubmit}>Add Smurf!</button>
           </form>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
    }

export default connect(mapStateToProps, {postSmurfs})(SmurfsForm)