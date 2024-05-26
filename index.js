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
  return {
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
