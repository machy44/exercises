function rot13(str) { // LBH QVQ VG!
  var withoutCode ='';
  var decision = '';
  for (var i = 0; i < str.length; i++) {
   //console.log(str[i].charCodeAt(str[i]));
    if(str[i].charCodeAt(str[i])>=65 && str[i].charCodeAt(str[i])<=77 ){
      withoutCode = str[i].charCodeAt(str[i])+13;
    }
    else if(str[i].charCodeAt(str[i])>77 && str[i].charCodeAt(str[i])<=90 ) {
    withoutCode = str[i].charCodeAt(str[i])-13;
    }
    else{
    withoutCode = str[i].charCodeAt(str[i]);

    }
  decision +=  String.fromCharCode(withoutCode);
  }
  console.log(decision);
  return str;
}

// Change the inputs below to test
console.log(
rot13("SERR PBQR PNZC"), rot13("SERR CVMMN!"), rot13("SERR YBIR?"), rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")
);
