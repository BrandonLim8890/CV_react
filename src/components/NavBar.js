import React, { Component } from 'react'

class NavBar extends Component {
	render() {
		return (
			<nav className='navbar navbar-light bg-light pl-5 justify-content-between'>
				<span className='navbar-brand mb-0 h1'>CV Application!</span>
				<span>
					<a href=''>Github</a>
				</span>
			</nav>
		)
	}
}

export default NavBar
