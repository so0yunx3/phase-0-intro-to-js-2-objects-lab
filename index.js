const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue (obj, key, value){
    return {
        ...obj,
        [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey (employee, name){
    const newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee, key){
    delete employee[key];
    return employee;

}
