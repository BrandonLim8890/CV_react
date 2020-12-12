import React, { Component } from 'react'

export class CreateCV extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	handleBtnClick() {
		this.props.handleSubmitBtn()
	}

	render() {
		return (
			<div className='mb-3'>
				<h2>Create CV</h2>
				<hr />
				<button className='w-100 btn btn-primary'>Create</button>
			</div>
		)
	}
}

export default CreateCV
