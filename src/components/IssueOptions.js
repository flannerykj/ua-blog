import React, { Component } from 'react';
import DropdownNav from './DropdownNav';
class IssueOptions extends Component {
  render() {
    return(
      <div>
          <thead>
            <tr>
              <td>Id</td>
              <td>Issue</td>
              <td style={{width: '300px'}}>
                Labels:
                <DropdownNav
                  labels={this.props.labels}
                  activeLabel={this.state.query.labels[0]}
                  onSelect={(value) =>{this.setQuery("labels", value)}}/>
              </td>
              <td>Status</td>
            </tr>
          </thead>

      </div>
    )
  }
}

export default IssueOptions;
