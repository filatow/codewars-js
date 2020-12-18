// https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  url = url.replace(/^(http|https):\/\//, ``);
  const dotCount = url.match(/\./g);
  if (dotCount.length > 1) {
    url = url.replace(/^(www\.)/, ``);
  }
  url = url.match(/\b[\w-]+\b/);
  return url[0];
}


domainName("http://google.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("www.org");
domainName("https://youtube.com");