import React, { Component } from 'react'
import EducationTrainingSection from '../EducationTrainingSection'

class EducationTraining extends Component {
	constructor(props) {
		super(props)

		this.state = {
			entries: [
				{
					Qualification: '',
					Organization: '',
					From: '',
					End: ''
				}
			]
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleNewEntry = this.handleNewEntry.bind(this)
	}

	// Handles changes to inputs by passing up the object, then changing by index in the array
	handleChange(entry, index) {
		let currentEntries = this.state.entries
		currentEntries[index] = entry
		this.setState({ entries: currentEntries })
		// Update App.js State
		this.props.handleUpdate('Education Training', this.state.entries)
	}

	// Pushes new entry to array to render extra form
	handleNewEntry() {
		let newEntry = {
			Qualification: '',
			Organization: '',
			From: '',
			End: ''
		}
		let newEntryArray = this.state.entries.concat(newEntry)
		this.setState({ entries: newEntryArray })
	}

	render() {
		return (
			<div className='mb-3'>
				<h2>Education and Training</h2>
				<hr />
				{/* Render entries for training based on length */}
				{this.state.entries.map((entry, index) => {
					return <EducationTrainingSection key={index} index={index} handleChange={this.handleChange} />
				})}
				<button className='btn btn-primary' onClick={this.handleNewEntry}>
					Add
				</button>
			</div>
		)
	}
}

export default EducationTraining
