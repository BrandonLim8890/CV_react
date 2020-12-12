import React, { Component } from 'react'
import WorkExperienceSection from '../WorkExperienceSection'

export class WorkExperience extends Component {
	constructor(props) {
		super(props)

		this.state = {
			entries: [
				{
					Title: '',
					Employer: '',
					From: '',
					End: ''
				}
			]
		}

		this.handleNewEntry = this.handleNewEntry.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(entry, index) {
		let currentEntries = this.state.entries
		currentEntries[index] = entry
		this.setState({ entries: currentEntries })
		// Update App.js State
		this.props.handleChange('Work Experience', this.state.entries)
	}

	handleNewEntry() {
		let newEntry = {
			Title: '',
			Employer: '',
			From: '',
			End: ''
		}
		let newEntryArray = this.state.entries.concat(newEntry)
		this.setState({ entries: newEntryArray })
	}

	render() {
		return (
			<div className='mb-3'>
				<h2>Work Experience</h2>
				<hr />
				{this.state.entries.map((entry, index) => {
					return <WorkExperienceSection index={index} key={index} handleChange={this.handleChange} />
				})}
				<button className='btn btn-primary' onClick={this.handleNewEntry}>
					Add
				</button>
			</div>
		)
	}
}

export default WorkExperience
