import React, { Component } from 'react';
import IssueList from '../components/IssueList';
import DropdownNav from '../components/DropdownNav';

class IssueIndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      issues: [],
      labels: [],
      query: {
        state: "all",
        labels: []
      }
    }
  }
  componentWillMount(){
    this.props.getIssues(this.state.query);
    this.props.getLabels();
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      issues: nextProps.issues.items,
      labels: nextProps.labels.items
    });
  }
  onQueryChange = (field, value) => {
    console.log(value);
    var query = this.state.query;
    query[field] = value;
    this.setState({
      query: query
    });
    console.log('new query: ', query);
    this.props.getIssues(query);
  }

  render() {
    return(
      <div>
        <h1>Issues</h1>
        <table className='table is-fullwidth'>
          <thead>
            <tr>
              <td>Id</td>
              <td>Issue</td>
              <td style={{minWidth: "100px"}}>
                Labels <br />
                <DropdownNav
                  options={["all", ...this.state.labels.map((label, i)=>(label.name))]}
                  activeOption={this.state.query.labels[0]|| "all"}
                  onSelect={(e) =>{this.onQueryChange("labels", [e.target.name])}}
                />
              </td>
              <td style={{minWidth: "100px"}}>
                State<br />
                <DropdownNav
                  options={["all", "open", "closed"]}
                  activeOption={this.state.query.state}
                  onSelect={(e) =>{this.onQueryChange("state", e.target.name)}}
                />

              </td>
            </tr>
          </thead>
          <IssueList issues={this.state.issues}/>
        </table>
      </div>
    )
  }
}

export default IssueIndexPage;
