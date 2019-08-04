var wmg = window.innerWidth;
var wmg2 = (wmg-1000)/2
text.style.margin = `200px ${wmg2}px 50px`;

if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
  document.getElementById('css').href = 'style2.css';
}
