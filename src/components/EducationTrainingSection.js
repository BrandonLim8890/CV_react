import React, { Component } from 'react'
import FullInput from './FullInput'
import DateInput from './DateInput'

class EducationTraining extends Component {
	constructor(props) {
		super(props)

		this.state = {}

		this.handleChange = this.handleChange.bind(this)
	}

	// On input change, it will call this method passing it the name and value in key:value
	handleChange(name, value) {
		this.setState({ [name]: value })
		// Anytime a change is made, it will update the parent Component by passing it the index number in array, and the updated "entry" details via state
		this.props.handleChange(this.state, this.props.index)
	}

	render() {
		return (
			<div className='d-flex flex-wrap justify-content-between mb-3'>
				<FullInput name={'Qualification'} placeholder={'Title of Qualification'} handleChange={this.handleChange} />
				<FullInput
					name={'Organization'}
					placeholder={'Organization providing education and training'}
					handleChange={this.handleChange}
				/>
				<DateInput name={'From'} handleChange={this.handleChange} />
				<DateInput name={'End'} handleChange={this.handleChange} />
			</div>
		)
	}
}

export default EducationTraining
