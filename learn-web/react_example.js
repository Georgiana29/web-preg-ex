import React, { Component } from 'react'

// TODO : adăugați posibilitatea de a edita un robot 
// editarea se face prin intermediul unui robot cu 2 stări, una de vizualizare și una de editare

// TODO : add the posibility to edit a robot 
// editing is done via 2 states a view state and an edit state

class Robot extends Component {
	constructor(props){
		super(props)
		let {item} = this.props
		this.state = {
			name : item.name,
			type : item.type,
			mass : item.mass,
			isEditing : false
		}
		this.handleC = (evt) => {
			this.setState({
				[evt.target.name] : evt.target.value
			})
		}
	
		
	}
	
	render() {
		let {item} = this.props
		if(this.state.isEditing){
		return (
			<div>
				<input type="text" name="name" id="name" onChange={this.handleC}/>
				<input type="text" name="type" id="type" onChange={this.handleC}/>
				<input type="text" name="mass" id="mass" onChange={this.handleC}/>
				<input type="button" value="save" onClick={() => {
							this.props.onSave(item.id, {
								name : this.state.name,
								type : this.state.type,
								mass : this.state.mass
							})
							this.setState({isEditing : false})
							}
						} />
				<input type="button" value="cancel" onClick={()=>this.setState({isEditing:false})} />

			</div>
		)
		}
		else {
				return (
		      <div>
			  		Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
			  		<input type="button" value="edit" onClick={() => this.setState({isEditing : true})} />
		      </div>
		      )
		}
	}
}

export default Robot
