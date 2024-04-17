const cloneDeep = (data) => {
  const clone = {};
  const etries = Object.entries(data);

  for (const [key, value] of etries) {
    if (typeof value === 'object') {
      clone[key] = cloneDeep(value);
    } else {
      clone[key] = value;
    }
  }

  return clone;
};

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру, как и data
const result = cloneDeep(data);

// Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true

