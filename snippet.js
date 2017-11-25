var createS = (method = 'POST', url, data = '') => {
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/graphql');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('In x: ' + xhr.status);
        console.log(xhr.response);
        resolve(xhr.response);
      }
    }
    xhr.send(data);
  })
}


var data = '{__schema { queryType { name, fields { name, description} }}}'

// var data = 'mutation RootMutationType { updateCount }'
data = '{ __schema {queryType {name,}}}'
createS('POST', 'http://localhost:3003/graphql', data).then((res) => res)