
// lodash get with changed behaviour regarding arrays

const get = (object, path) => {
  
  if (path === "") {
    return object;
  }

  const pathList = path.split(".");


  return Array.isArray(object) ?  get(object[0], pathList.join(".")) : get(object[pathList[0]], pathList.slice(1).join("."));
};  


var test = { a: [{ b: { c: 3 } }] };

console.log(get(test, "a.b.c"));