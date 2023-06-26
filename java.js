
function contact()
{
	var x = document.getElementById('contact');
  if (x.style.display === 'none') {
    x.style.display = 'inline-block';
  } else {
    x.style.display = 'none';
  }
}
function home(){
  document.getElementById('home').style.display="inline";
  document.getElementById('about').style.display="none";
  document.getElementById('Academics').style.display="none"; 
  document.getElementById('techskills').style.display="none";
  document.getElementById('interskills').style.display="none";
  document.getElementById('Certificates').style.display="none";
  document.getElementById('contacts').style.display="none";
}
function academics()
{
  document.getElementById('home').style.display="none";
  document.getElementById('about').style.display="none";
  document.getElementById('techskills').style.display="none";
  document.getElementById('interskills').style.display="none";
  document.getElementById('Certificates').style.display="none";
  document.getElementById('contacts').style.display="none";
  document.getElementById('Academics').style.display="inline-block";

}
function techskills(){
  document.getElementById('home').style.display="none";
  document.getElementById('about').style.display="none";
  document.getElementById('Academics').style.display="none";
  document.getElementById('interskills').style.display="none";
  document.getElementById('Certificates').style.display="none";
  document.getElementById('contacts').style.display="none";
  document.getElementById('techskills').style.display="inline-block";
}
function interskills(){
  document.getElementById('home').style.display="none";
  document.getElementById('about').style.display="none";
  document.getElementById('Academics').style.display="none";
  document.getElementById('techskills').style.display="none";
  document.getElementById('Certificates').style.display="none";
  document.getElementById('contacts').style.display="none";
  document.getElementById('interskills').style.display="inline";
}
function certificates() {
  document.getElementById('home').style.display="none";
  document.getElementById('about').style.display="none";
  document.getElementById('Academics').style.display="none";
  document.getElementById('techskills').style.display="none";
  document.getElementById('interskills').style.display="none";
  document.getElementById('contacts').style.display="none";
  document.getElementById('Certificates').style.display="inline-block"
}
function contacts() {
 document.getElementById('home').style.display="none";
  document.getElementById('Academics').style.display="none";
  document.getElementById('techskills').style.display="none";
  document.getElementById('interskills').style.display="none";
  document.getElementById('Certificates').style.display="none";
  document.getElementById('contacts').style.display="none";
  document.getElementById('about').style.display="none";
  document.getElementById('contacts').style.display="inline"; 
}
function about(){
 document.getElementById('home').style.display="none";
  document.getElementById('Academics').style.display="none";
  document.getElementById('techskills').style.display="none";
  document.getElementById('interskills').style.display="none";
  document.getElementById('Certificates').style.display="none";
  document.getElementById('contacts').style.display="none";
  document.getElementById('contacts').style.display="none";
  document.getElementById('about').style.display="inline";  
}