
function submitData(name, email) { 
    const newData = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    "name": name,
    "email": email
  })}


let body = document.querySelector('body')
return fetch('http://localhost:3000/users', newData)
.then(resp => resp.json())
.then(resp => {
  let p = document.createElement("p")
   p.textContent = resp.id
   body.appendChild(p)
})
  .catch(error => {
    let p = document.createElement('p')
    p.textContent = error.message
   body.appendChild(p)

  })}
