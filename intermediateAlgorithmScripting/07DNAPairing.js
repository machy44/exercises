function pairElement(str) {
  str = str.split([]);
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'G':
        str[i] = ['G','C']
        break;
      case 'C':
          str[i] = ['C','G'];
          break;
      case 'A':
        str[i] = ['A','T'];
        break;
      case 'T':
        str[i] =['T','A'];
        break;
  }
}
  return str;
}
console.log(
pairElement("ATGCG")
);
