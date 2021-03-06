import React, { Component } from 'react'

class FullInput extends Component {
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
			<div className='input-group mb-3'>
				<div className='input-group-prepend'>
					<span className='input-group-text' id='basic-addon1'>
						{this.props.name}
					</span>
				</div>
				<input
					type={typeof this.props.type == 'undefined' ? 'text' : 'email'}
					className='form-control'
					name={this.props.name}
					id={this.props.name}
					value={this.state.value}
					onChange={this.handleChange}
          placeholder={typeof this.props.placeholder == 'undefined' ? '' : this.props.placeholder}
				/>
			</div>
		)
	}
}

export default FullInput
