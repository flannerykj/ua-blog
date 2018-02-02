import React, { Component } from 'react';
import DropdownNav from './DropdownNav';

class IssueList extends Component {

  render() {
    if (this.props.issues) {
      return(
          <tbody>
            {this.props.issues.map((issue, i) => (
              <tr key={issue.id}>
                <th>{issue.id}</th>

                  <td>{issue.title}</td>
                  <td>{issue.labels.map((label, i) => (<span key={i}>{label.name} </span>))}</td>
                  <td>{issue.state}</td>
              </tr>
          ))}
        </tbody>
      )
    } else {
      return (
        <div> Loading issues from github... </div>
      );
    }
  }
}

export default IssueList;
