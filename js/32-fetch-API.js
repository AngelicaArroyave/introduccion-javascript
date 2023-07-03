// Fetch API

// Forma 1
function getEmployees() {

    const url = 'employees.json'

    fetch(url)
        .then(result => result.json()) // Se puede retornar como json o como texto, el retorno es implicito
        .then(data => {
            const { employees } = data
            // console.log(employees);

            employees.forEach(employee => {
                // console.log(employee);
                console.log(employee.id);
                console.log(employee.name);
                console.log(employee.surname);
                console.log(employee.charge);

                document.querySelector('#nameEmployees').textContent += employee.name + ' '
            });
        })
}

// Forma 2
async function getEmployees() {

    const url = 'employees.json'
    const result = await fetch(url)
    const data = await result.json()
    console.log(data);
}

getEmployees()