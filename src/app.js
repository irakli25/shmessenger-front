// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaHhlaSIsImlhdCI6MTYyMjczOTc5NiwiZXhwIjoxNjIyNzc1Nzk2fQ.EYMfAO4oGCFmzVClgJ1r19pSWaKkG2thArWnT_kpWd0')


const myRequest = new Request('http://localhost:8080/user/getAll', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors'
});

fetch(myRequest)
  .then(response => console.log(response.json()));