import React, { Component } from "react";
import Header from "./Header";
import Employee from "./EmployeeEntry";
import API from "../utils/API";
// import Search from "./SearchBox";

class EmployeeTable extends Component {
  state = {
    employees: [],
    searchName: "",
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res.data.results[0]);
        this.setState({ employees: res.data.results });
        console.log(this.state.employees)
      })
      .catch((err) => console.log(err));
    console.log("loaded");
  }

  removeFriend = (id) => {
    let newArr = this.state.friends.filter((friend) => friend.id !== id);
    this.setState({ friends: newArr });
  };

  // handlePageChange = (page) => {
  //   this.setState({ currentPage: page });
  // };

  handleInputChange = (event) => {
    this.setState({ searchName: event.target.value });
  };

  clickFunction = (event) => {
    console.log(event.target.id);
  };

  render() {
    return (
      <div>
        <Header />
        {/* <Search /> */}
        <p>Updates with state: {this.state.searchName}</p>
        <form className="search-bar">
          <input
            value={this.state.searchName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search by first name"
          />
        </form>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Photo</th>
              <th className="clickableHeader" scope="col" id="first-name" onClick={this.clickFunction}>
                First Name
              </th>
              <th className="clickableHeader" scope="col" id="last-name" onClick={this.clickFunction}>
                Last Name
              </th>
              <th scope="col">Phone Number</th>
              <th className="clickableHeader" scope="col" id="email" onClick={this.clickFunction}>
                Email
              </th>
              <th className="clickableHeader" scope="col" id="screen-name" onClick={this.clickFunction}>
                Screen name
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((person) => (
              <Employee key={this.state.employees.index}
                image={person.picture.thumbnail}
                firstName={person.name.first}
                lastName={person.name.last}
                phone={person.phone}
                email={person.email}
                screenName={person.login.username}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
