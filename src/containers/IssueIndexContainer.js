import IssueIndexPage from '../pages/IssueIndexPage';
import {getIssues, getLabels} from '../actions';
import {connect} from 'react-redux';


var mapStateToProps = function(appState){
  return {
    issues: appState.issues,
    labels: appState.labels,
  }
}
var mapDispatchToProps = function(dispatch){
  return {
    getIssues: function(query){ dispatch(getIssues(query)); },
    getLabels: function(){ dispatch(getLabels()); }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IssueIndexPage);
