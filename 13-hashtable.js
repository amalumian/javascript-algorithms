const HashTable = function (obj) {
  let length = 0;
  this._items = (function (obj) {
    let items = {};
    for (let p in obj) {
      items[p] = obj[p];
      length++;
    }
    return items;
  })(obj);

  this.set = function (key, value) {
    let previous = undefined;

    if (this.has(key)) {
      previous = this._items[key];
    } else {
      length++;
    }

    this._items[key] = value;

    return previous;
  };

  this.get = function (key) {
    return this._items.hasOwnProperty(key) ? this._items[key] : undefined;
  };

  this.has = function (key) {
    return this._items.hasOwnProperty(key);
  };

  this.remove = function (key) {
    if (this.has(key)) {
      let previous = this._items[key];
      length--;
      delete this._items[key];
      return previous;
    } else {
      return undefined;
    }
  };

  this.getKeys = function () {
    let keys = [];

    for (let i in this._items) {
      if (this.has(i)) {
        keys.push(i);
      }
    }

    return keys;
  };

  this.getValues = function () {
    let values = [];

    for (let i in this._items) {
      if (this.has(i)) {
        values.push(this._items[i]);
      }
    }

    return values;
  };

  this.each = function (callback) {
    for (let i in this._items) {
      if (this.has(i)) {
        callback(i, this._items[i]);
      }
    }
  };

  this.clear = function () {
    this._items = {};
    length = 0;
  };

  Object.defineProperty(this, "length", {
    get: function () {
      return length;
    },
  });

  Object.defineProperty(this, "keys", {
    get: function () {
      return this.getKeys();
    },
  });

  Object.defineProperty(this, "values", {
    get: function () {
      return this.getValues();
    },
  });
};

const hashtable = new HashTable({ one: 1, two: 2, three: 3, cuatro: 4 });

console.log("Original length: " + hashtable.length); // Original length: 4
console.log('Value of key "one": ' + hashtable.get("one")); // Value of key "one": 1
console.log('Has key "foo"? ' + hashtable.has("foo")); // Has key "foo"? false
console.log('Previous value of key "foo": ' + hashtable.set("foo", "bar")); // Previous value of key "foo": undefined
console.log("Length after set: " + hashtable.length); // Length after set: 5
console.log('Value of key "foo": ' + hashtable.get("foo")); // Value of key "foo": bar
console.log('Value of key "cuatro": ' + hashtable.get("cuatro")); // Value of key "cuatro": 4
console.log("Get keys by using property: " + hashtable.keys); // Get keys by using property: one,two,three,cuatro,foo
hashtable.clear();
console.log("Length after clear: " + hashtable.length); // Length after clear: 0
