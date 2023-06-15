const employee = {
  name: `Sam`,
};
function updateEmployeeWithKeyAndValue(employee, key, value){
  const updatedEmployee = {...employee};

  updatedEmployee[key] = value;

  return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromEmployeeByKey(obj, key){
  let newobj = {...obj}

  delete newobj[key]

  return newobj
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
  delete obj[key]

  return obj
}