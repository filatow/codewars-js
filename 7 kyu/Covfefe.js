// https://www.codewars.com/kata/592fd8f752ee71ac7e00008a

function covfefe(str){
  const RE = /coverage/g;
  if (!RE.test(str)) {
    return str + ' covfefe';
  } else {
    return str.replace(RE, 'covfefe');
  }
}