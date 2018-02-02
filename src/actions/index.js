let apiUrl = "https://api.github.com/repos/flannerykj/urbanapplause-node";


export function getIssues(query){
  return (function(dispatch){
    dispatch ({type: 'REQUEST_ISSUES', query: query});
    let qs = [];
    if(query){
      if (query.labels.includes("all")){
        qs.push("labels\="+[].join(','));
      }
      else if(query.labels && query.labels.length>0){
        qs.push("labels\="+query.labels.join(','));
      }
      if (query.state){
        qs.push("state\="+query.state)
      }
    }
    return fetch(apiUrl + '/issues\?' + qs.join('&'))
      .then(res => res.json())
      .then((json) => {
        console.log(json);
        dispatch({type: 'RECEIVE_ISSUES', data: json})
      })
      .catch((err) => console.log(err));
  });
}

export function getLabels(){
  return (function(dispatch){
    dispatch ({type: 'REQUEST_LABELS'});
    return fetch(apiUrl + '/labels')
      .then(res => res.json())
      .then((json) => {
        console.log(json);
        dispatch({type: 'RECEIVE_LABELS', data: json})
      })
      .catch((err) => console.log(err));
  });
}
