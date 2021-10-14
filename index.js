// Add your code here 
// const body = document.getElementsByTagName("body")[0];
// console.log(body);

// function submitData(username, emailAddress) {

//   let formData = {
//     name: username,
//     email: emailAddress
//   };
//   // let text = document.body.createElement("div");

//   // element.append(text);

//   let request = fetch('http://localhost:3000/users', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData)
//   })
//   .then (response => response.json())
//   .then (object => console.log(object.id))
//   .catch (function(error) {
//     alert("Bad things! Ragnarők!")
//     console.log(error.message)
//   }
// }

function submitData(name, email){
return fetch('http://localhost:3000/users',{
  method: 'POST',
  headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
  },
  body: JSON.stringify({
      name: name,
      email: email,
  })
})
.then(res => res.json())
.then(data => renderUser(data))
.catch(function (error){
  console.log(error)
  alert("Unauthorized Access")
  document.body.append(error.message)
})
}

function renderUser(data){
console.log(data.id)
document.body.append(data.id)
}