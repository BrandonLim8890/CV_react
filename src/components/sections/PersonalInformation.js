import React, { Component } from 'react'
import Input from '../Input'
import TelInput from '../TelInput'

class PersonalInformation extends Component {
	constructor(props) {
		super(props)

		this.state = {}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(name, value) {
		this.setState({ [name]: value })
		// Update App.js Overall values

		this.props.handleUpdate('Personal Information', this.state)
	}

	render() {
		return (
			<div className='mb-3'>
				<h2>Personal Information</h2>
				<hr />
				<div className='d-flex flex-wrap justify-content-between'>
					<Input name={'First Name'} handleChange={this.handleChange} />
					<Input name={'Last Name'} handleChange={this.handleChange} />
					<Input name={'Email'} handleChange={this.handleChange} type={'email'} />
					<TelInput name={'Telephone'} handleChange={this.handleChange} />
				</div>
			</div>
		)
	}
}

export default PersonalInformation
