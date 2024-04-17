const dnaRnaMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export default (dna) => {
  let rna = '';

  for (const nucleotide of dna) {
    if (dnaRnaMap[nucleotide]) {
      rna += dnaRnaMap[nucleotide];
    } else {
      return null;
    }
  }

  return rna;
};

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null

