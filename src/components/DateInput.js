import React, { Component } from 'react'

export default class DateInput extends Component {
	constructor(props) {
		super(props)

		this.state = { value: '' }

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({ value: e.target.value })
		this.props.handleChange(this.props.name, this.state.value)
	}

	render() {
		return (
			<div className='input-group mb-3' style={{ width: '47%' }}>
				<div className='input-group-prepend'>
					<span className='input-group-text' id='basic-addon1'>
						{this.props.name}
					</span>
				</div>
				<input
					type='date'
					name={this.props.name}
					id={this.props.name}
					className='form-control'
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}
