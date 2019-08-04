// var wmg = window.innerWidth;
// var wmg2 = (wmg-1000)/2
// text.style.margin = `200px ${wmg2}px 50px`;
text.style.margin = `200px auto 50px`;

if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
  text.style.backgroundColor = 'pink';
  //document.getElementById('css').href = 'style2.css';
  window.location.href = 'index2.html';
}else{
  text.style.backgroundColor = 'blue';
  //document.getElementById('css').href = 'style.css';
  window.location.href = 'index.html';
}
