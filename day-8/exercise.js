//1

var person = {
  "name": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Exampletown",
    "state": "ABC",
    "zipcode": "12345"
  },
  "getBirthYear": function() {
    var currentYear = new Date().getFullYear();
    return currentYear - this.age;
  },
  "getFullAddress": function() {
    return this.address.street + ", " + this.address.city + ", " + this.address.state + " " + this.address.zipcode;
  }
};

console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
console.log(person.address); // Output: { "street": "123 Main St", "city": "Exampletown", "state": "ABC", "zipcode": "12345" }

console.log(person.getBirthYear()); // Output: 1992
console.log(person.getFullAddress()); // Output: 123 Main St, Exampletown, ABC 12345

  //2.
  function mergeJSONObjects(obj1, obj2) {
  var mergedObj = {};

  // Merge properties from obj1
  for (var prop1 in obj1) {
    if (obj1.hasOwnProperty(prop1)) {
      mergedObj[prop1] = obj1[prop1];
    }
  }

  // Merge properties from obj2, handling conflicts
  for (var prop2 in obj2) {
    if (obj2.hasOwnProperty(prop2)) {
      if (mergedObj.hasOwnProperty(prop2)) {
        // Handle conflict by appending a suffix to the property name
        var newProp = prop2 + "_merged";
        mergedObj[newProp] = obj2[prop2];
      } else {
        mergedObj[prop2] = obj2[prop2];
      }
    }
  }

  return mergedObj;
}

//3
function deepCloneJSONObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  var originalObj = {
    "name": "John Doe",
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "Exampletown"
    }
  };
  
  var clonedObj = deepCloneJSONObject(originalObj);
  
  console.log(clonedObj);

  //4.
  function getValueAtPath(obj, path) {
    var pathArray = path.split('.');
    var value = obj;
  
    try {
      for (var i = 0; i < pathArray.length; i++) {
        var key = pathArray[i];
        value = value[key];
      }
      return value;
    } catch (error) {
      return undefined;
    }
  }

  var person = {
    "name": "John Doe",
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "Exampletown"
    }
  };
  
  var path = "address.city";
  var value = getValueAtPath(person, path);
  console.log(value); // Output: Exampletown
  
  path = "address.zipcode";
  value = getValueAtPath(person, path);
  console.log(value); // Output: undefined (invalid path)

  //5
  function flattenJSONObject(obj, prefix = '') {
    var flattenObj = {};
  
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var newPath = prefix + key;
        
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          var nestedObj = flattenJSONObject(obj[key], newPath + '.');
          Object.assign(flattenObj, nestedObj);
        } else {
          flattenObj[newPath] = obj[key];
        }
      }
    }
  
    return flattenObj;
  }
  var nestedObj = {
    "name": "John Doe",
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "Exampletown",
      "country": {
        "name": "United States",
        "code": "US"
      }
    }
  };
  
  var flattenedObj = flattenJSONObject(nestedObj);
  console.log(flattenedObj);