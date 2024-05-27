function hashMap() {
  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % 16;
    }
    return hashCode;
  }
  //create node to handle collisions
  function node(key, value) {
    return {
      key,
      value,
      nextNode: null,
    };
  }
  //create function to increase size of arr depending on size of arr
  function increaseArr() {}
  let capacity = 16; //define capacity
  let loadFactor = 0.8; //define loadFactor
  arr = Array(capacity); //create array of size capacity

  //2 set uses key to generate hashcode which is used as index of arr to store key value pair in form of node for future collisions
  function set(key, value) {
    index = hash(key);
    if (!arr[index]) {
      arr[index] = node(key, value);
    } else if (arr[index]) {
      if (arr[index].key == key) {
        arr[index].value = value;
      } else {
        arr[index].nextNode = node(key, value);
      }
    }
    return arr;
    //logic to handle collision to be added later
  }
  //3 get : takes key as argument and returns value assigned to key if it exists otherwise returns null
  function get(key) {
    index = hash(key);
    if (arr[index]) {
      if (arr[index].key == key) {
        return arr[index].value;
      }
    } else {
      return "Null";
    }
  }
  //4 has : takes key as argument and returns true or false depending if key exists in the hashmap
  function has(key) {
    index = hash(key);
    if (arr[index]) {
      if (arr[index].key == key) {
        return true;
      }
    } else {
      return false;
    }
  }
  //5 remove : takes key as argument and removes it from the hashmap
  function remove(key) {
    index = hash(key);
    if (arr[index]) {
      arr[index] = null;
    }
    return arr;
  }
  //6 length : returns number of keys stored in arr
  function length() {
    let length = 0;
    for (ele of arr) {
      if (ele) {
        length++;
      }
    }
    return length;
  }
  //7 clear : deletes all entries of arr
  function clear() {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = null;
    }
  }
  //8 keys : returns an array containig all the keys
  function keys() {
    keysArr = [];
    for (ele of arr) {
      if (ele) {
        keysArr.push(ele.key);
      }
    }
    return keysArr;
  }
  //9 values : returns an array containing all the values
  function values() {
    valueArr = [];
    for (ele of arr) {
      if (ele) {
        valueArr.push(ele.value);
      }
    }

    return valueArr;
  }
  //10 entries : returns an array containg key value pair
  function entries() {
    entry = [];
    for (ele of arr) {
      if (ele) {
        entry.push([ele.key, ele.value]);
      }
    }
    return entry;
  }
  return {
    values,
    entries,
    keys,
    clear,
    length,
    remove,
    has,
    get,
    set,
    arr,
    hash,
  };
}
/* if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }*/
