

async function getEmployees() {
  return await fetch ('https://randomuser.me/api/?results=10') 
    .then (response => response.json())
  
}

export default getEmployees;