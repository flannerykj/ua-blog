import React, { Component } from 'react';

class IssueListItem extends Component {
  render() {
    const {issue} = this.props;
    return(
      <tr>
          <th>{issue.id}</th>
          <td>{issue.title}</td>
          <td>{issue.body}</td>
      </tr>
    )
  }
}

export default IssueListItem;
