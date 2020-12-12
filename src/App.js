import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import PersonalInformation from './components/sections/PersonalInformation'
import EducationTraining from './components/sections/EducationTraining'
import WorkExperience from './components/sections/WorkExperience'
import CreateCV from './components/sections/CreateCV'
class App extends Component {
	constructor() {
		super()

		this.state = {}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmitBtn.bind(this)
	}

	handleChange(key, value) {
		this.setState({ [key]: value })
	}

	handleSubmitBtn() {}

	render() {
		return (
			<div>
				<NavBar />
				<div className='container-xl'>
					<PersonalInformation handleUpdate={this.handleChange} />
					<EducationTraining handleUpdate={this.handleChange} />
					<WorkExperience handleChange={this.handleChange} />
					<CreateCV handleSubmitBtn={this.handleSubmitBtn} />
				</div>
			</div>
		)
	}
}

export default App
