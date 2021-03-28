  function nama(){
      var txt;
      person = prompt("Please enter your name:", "Null");
      var now = new Date();
      var hour = now.getHours();
      if(person == "" || person.search("[!A-Z.a-z]")){
      alert("Inputan yang anda masukan salah");
      nama();
      }
      if (person != null || hour >= 12) {
          if (hour >= 0 && hour < 12) {
              txt = "Hello " + person + " Good Morning.";
          }
          if (hour >= 12 && hour < 18) {
              txt = "Hello " + person + " Good Afternoon.";
          }
          if (hour >= 18) {
              txt = "Hello " + person + " Good Evening.";
          }
      } else {
      txt = "User cancelled the prompt.";
      }
      document.getElementById("text2").innerHTML = txt;
  }

 function silinder1() {
  var tinggi_silinder = (document.getElementById("silinder").value);
  var jarijari_silinder = (document.getElementById("thisJ").value);
  tinggi_silinder = tinggi_silinder.replace(",", ".");
  var tinggi_silinder1 = tinggi_silinder.replace(".", "");
  console.log(tinggi_silinder);
  jarijari_silinder = jarijari_silinder.replace(",", ".");
  var jarijari_silinder1 = jarijari_silinder.replace(".", "");
  console.log(jarijari_silinder);
  var reg = new RegExp('^\\d+$');
if(tinggi_silinder == "" || jarijari_silinder == "") {
    alert("Mohon masukkan input silinder terlebih dahulu");
    return;
  }
if(!reg.test(tinggi_silinder1) || !reg.test(jarijari_silinder1)) {
    alert("Masukkan input Silider hanya boleh berupa angka");
    document.getElementById("silinder").value = "";
    document.getElementById("thisJ").value = "";
    document.getElementById("luassilinder").innerHTML = "";
    document.getElementById("volumsilinder").innerHTML = "";
    return;
  }
  tinggi_silinder = parseFloat(tinggi_silinder);
  jarijari_silinder = parseFloat(jarijari_silinder);
  console.log(tinggi_silinder);
  console.log(jarijari_silinder);
  document.getElementById("luassilinder").innerHTML = 2 * (3.14 * jarijari_silinder) * (jarijari_silinder + tinggi_silinder);
  document.getElementById("volumsilinder").innerHTML = 3.14 * (jarijari_silinder * jarijari_silinder) * tinggi_silinder;
}


function Bola() {
  var jarijari_bola = (document.getElementById("thisJbola").value);
  jarijari_bola = jarijari_bola.replace(",",".");
  var jarijari_bola1 = jarijari_bola.replace(".","");
if(jarijari_bola == "") {
    alert("Masukkan input jari-jari bola terlebih dahulu");
    return;
  }
  var reg = new RegExp('^\\d+$');
if(!reg.test(jarijari_bola1)) {
    alert("Masukkan input Bola hanya boleh berupa angka");
    document.getElementById("thisJbola").value = "";
    document.getElementById("lp-bola").innerHTML = "";
    document.getElementById("vm-bola").innerHTML = "";
    return;
  }
  jarijari_bola = parseFloat(jarijari_bola);
  document.getElementById("lp-bola").innerHTML = 4 * 3.14 * jarijari_bola * jarijari_bola;
  document.getElementById("vm-bola").innerHTML = (4 * 3.14 * jarijari_bola * jarijari_bola * jarijari_bola)/3;
}


function Kerucut() {
  var tinggi_kerucut = (document.getElementById("thisTkerucut").value);
  var jarijari_kerucut = (document.getElementById("thisJkerucut").value);
  var garis_pelukis = (document.getElementById("thisJgaris").value);
  var tinggi_kerucut1 = tinggi_kerucut.replace(",",".");
  tinggi_kerucut1 = tinggi_kerucut1.replace(".", "");
  var jarijari_kerucut1 = jarijari_kerucut.replace(",",".");
  jarijari_kerucut1 = jarijari_kerucut1.replace(".","");
  var garis_pelukis1 = garis_pelukis.replace(",",".");
  garis_pelukis1 = garis_pelukis1.replace(".","");
  var reg = new RegExp('^\\d+$');

if(tinggi_kerucut == "" || jarijari_kerucut == "" || garis_pelukis == "") {
    alert("Mohon masukkan input kerucut terlebih dahulu");
    return;
  }

if(!reg.test(tinggi_kerucut1) || !reg.test(jarijari_kerucut1) || !reg.test(garis_pelukis1)) {
    alert("Masukkan input Kerucut hanya boleh berupa angka");
    document.getElementById("thisTkerucut").value = "";
    document.getElementById("thisJgaris").value = "";
    document.getElementById("thisJkerucut").value = "";
    document.getElementById("lp-kerucut").innerHTML = "";
    document.getElementById("vm-kerucut").innerHTML = "";
    return;
  }
  tinggi_kerucut = parseFloat(tinggi_kerucut);
  jarijari_kerucut = parseFloat(jarijari_kerucut);
  garis_pelukis = parseFloat(garis_pelukis);
  document.getElementById("lp-kerucut").innerHTML = (3.14 * jarijari_kerucut) * (jarijari_kerucut + garis_pelukis);
  document.getElementById("vm-kerucut").innerHTML = 3.14 * jarijari_kerucut * jarijari_kerucut * tinggi_kerucut / 3;
}