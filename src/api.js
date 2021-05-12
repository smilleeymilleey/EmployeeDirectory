
function getEmployees() {
    fetch ('https://randomuser.me/api/?results=5000') 
    .then (response => response.json())
    .then (data => console.log(data))
}
getEmployees()
