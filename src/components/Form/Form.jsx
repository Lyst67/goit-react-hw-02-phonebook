import { Component } from "react"

class Form extends Component {
    state = {
    name: ''
    }

     handleNameChange = (event) => {
    const {name, value} = event.currentTarget
    this.setState({ [name]: value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
      this.props.onSubmit(this.state)
      this.reset()
    }
    reset = () => {
        this.setState({
            name: ''
        })
    }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Name
          <input type="text"  value={this.state.name} name="name" onChange={this.handleNameChange}></input>
        </label>
        <button type="submit">Add contact</button>
      </form> 
    ) 
    }
   
}

export default Form