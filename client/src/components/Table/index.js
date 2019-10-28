import React, { Component } from 'react';
import axios from "axios"
import { Grommet } from 'grommet';
import Appbar from "../Appbar"

export default class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  handleFormrequest = () => {

   

    axios.get('/api/customers')
      .then(res => {
        this.setState({ users: res.data });
      })
  }

  componentDidMount = () => {
    this.handleFormrequest ()
  }

  render() {
    return (
      <Grommet plain>
        <Appbar>
          <div className="user-details">
            {
              this.state.users.map(user =>
                <tr>
                  <td>firstName: </td>
                  <td>{user.firstname}</td>
                  <td>lastName: </td>
                  <td>{user.lastname}</td>
                  <td>phoneNumber: </td>
                  <td>{user.phoneNumber}</td>
                  <td>description: </td>
                  <td>{user.description}</td>
                </tr>
              )
            }
          </div>
        </Appbar>
      </Grommet>
    )
  }
}
