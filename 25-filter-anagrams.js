const filterAnagrams = (word, coll) => {
  const sortCharacters = (str) => str.split('').sort().join('');
  const sortedWord = sortCharacters(word);

  return coll.filter((el) => sortedWord === sortCharacters(el));
};

filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']
 
filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']
 
filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// []

