import { Component } from "react"
import  Form  from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";


class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
 
  formSubmitHandler = data => {
    console.log(data)
    this.setState(data)
    console.log(this.state.contacts)
    this.setState(() => {
      this.state.contacts.push(data)
    })
 }


  render() {

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit = {this.formSubmitHandler} />
      <Contacts
        title="Contacts"
        options={this.state}
      />
     
    </div>
  );
}
}

export default App
