import React, { Component } from "react";
import Header from "./Header";
import Employee from "./EmployeeEntry";
import API from "../utils/API";
// import Search from "./SearchBox";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Discover from "./pages/Discover";
// import Search from "./pages/Search";
// import { BrowserRouter as Router, Route } from "react-router-dom";

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
        <p>Hello {this.state.searchName}</p>
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
              <th scope="col" id="first-name" onClick={this.clickFunction}>
                First Name
              </th>
              <th scope="col" id="last-name" onClick={this.clickFunction}>
                Last Name
              </th>
              <th scope="col">Phone Number</th>
              <th scope="col" id="email" onClick={this.clickFunction}>
                Email
              </th>
              <th scope="col" id="screen-name" onClick={this.clickFunction}>
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
      /* // <Router> */
      // {/* currentPage={this.state.currentPage} */}
      // {/* handlePageChange={this.handlePageChange} */}
      // {/* <Route exact path="/" component={Home} />
      //   <Route exact path="/about" component={About} />
      //   <Route exact path="/discover" component={Discover} />
      //   <Route path="/search" component={Search} /> */}
      // {/* </Router> */}
    );
  }
}

export default EmployeeTable;
