import React, { Component } from 'react'

export class TelInput extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: ''
		}

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
						Number
					</span>
				</div>
				<input
					className='form-control'
					type='tel'
					name='phone'
					id='phone'
					pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
					onChange={this.handleChange}
					value={this.state.value}
				/>
			</div>
		)
	}
}

export default TelInput
