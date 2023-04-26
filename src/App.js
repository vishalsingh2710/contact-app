import { Component } from "react";

import ContactItem from "./components/ContactItem";

import "./App.css";

const initialContactsList = [
  {
    id: 1,
    name: "Ram",
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Pavan",
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: 3,
    name: "Nikhil",
    mobileNo: 9999955555,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Vishal ingh",
    mobileNo: 9315328170,
    isFavorite: false,
  },
];

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: "",
    mobileNo: "",
  };

  onAddContact = (event) => {
    event.preventDefault();
  };

  onChangeMobileNo = (event) => {
    this.setState({ mobileNo: event.target.value });
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { name, mobileNo, contactsList } = this.state;
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
            />
            <button type="submit" className="button">
              Add Contact
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Mobile Number</p>
            </li>
            {contactsList.map((eachContact) => (
              <ContactItem key={eachContact.id} contactDetails={eachContact} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
