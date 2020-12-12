import React, { Component } from 'react'
import DateInput from './DateInput'
import FullInput from './FullInput'

export class WorkExperienceSection extends Component {
	constructor(props) {
		super(props)

		this.state = {}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(name, value) {
		this.setState({ [name]: value })
		this.props.handleChange(this.state, this.props.index)
	}

	render() {
		return (
			<div className='d-flex flex-wrap justify-content-between mb-3'>
				<FullInput name={'Title'} placeholder={'Occupation'} handleChange={this.handleChange} />
				<FullInput name={'Employer'} handleChange={this.handleChange} />
				<DateInput name={'From'} handleChange={this.handleChange} />
				<DateInput name={'End'} handleChange={this.handleChange} />
			</div>
		)
	}
}

export default WorkExperienceSection
