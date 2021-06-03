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

// Example GET method implementation:
async function getData(url = '', jwt) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

  });
  return response; // parses JSON response into native JavaScript objects
}

// postData('http://localhost:8080/authenticate', {
//   username:"chxei",
//   password:"chxei"
// })
//   .then(data => {
//     console.log(data.jwt); // JSON data parsed by data.json() call
//       getData('http://localhost:8080/users',data.jwt)
//       .then(data => {
//         console.log(data);
//       })
//       .catch((error) => {
//       console.log(error);
//       })
//   }).catch((error) => {
//     console.error('Error:', error);
//   });

getData('http://localhost:8080/country/getAll')
.then(data => {
  console.log(data);
})
.catch((error) => {
console.error('Error:', error);
})



// const content = 'Hello World';
// const myHeaders = new Headers();
// myHeaders.append('Content-Type', 'application/json');
// myHeaders.append('Content-Length', content.length.toString());
// myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
// myHeaders.append('Vary', 'Origin')
// myHeaders.append('Vary', 'Access-Control-Request-Method')
// myHeaders.append('Vary', 'Access-Control-Request-Headers')
// myHeaders.append('Vary', 'Access-Control-Allow-Origin')
// myHeaders.append('Access-Control-Allow-Origin', 'google.com')


// const myRequest = new Request('http://localhost:8080/country/getAll', {
//   method: 'GET',
//    headers: myHeaders,
//   mode: 'cors'
// });

// fetch(myRequest)
//   .then(response => console.log(response.json()));