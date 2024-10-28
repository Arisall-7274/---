var Textt = localStorage.getItem('Text4');
document.getElementById("demo").innerHTML = Textt;

let login = document.querySelector('#Password');

document.getElementById('submitpww').onclick = myFunction;
function myFunction() {
    const Login = login.value;
    var Loginn = bigIntHash(Login)

if(Loginn=='2290499168860'){
    var cod1 = 1;
}
else if(Loginn==1723){
    var cod2 = 1;
}
else{
    alert('Взломать меня вздумали')
}

if(cod1==1){
    var html = '';
    html += "<textarea id='myTextArea'></textarea>"
    html += "<button id='submit2' onclick='myFunction()' type='button'>Добавить Участника</button>"
    document.getElementById("playButton").innerHTML = html;

    let Text = document.querySelector('#textt');

    document.getElementById('submit2').onclick = myFunction;
    function myFunction() {
        // const Ttext = Text.value;

        var Ttext = document.getElementById('myTextArea').value; 
        Ttext = Ttext.replace(/\r?\n/g, '<br />');

        localStorage.setItem('Text4', Ttext);
        document.getElementById("demo").innerHTML = localStorage.getItem('Text4');
        }
}
if(cod2==1){
    alert('Привет');
    alert('С прощедшим');
    alert('Ты реально запарился и разгодал шифр?!');
    alert('Поздравляю');
    alert('Поздравляю!');
    alert('Поздравляю!!');
    alert('Поздравляю!!!');
    alert('Сейчас 6:34');
    alert('Так что я не знаю что ещё написать');
    alert('Удачи и пока')
}
}
function bigIntHash(str, seed = 0) {
    const prime = 31n;
    let hash = BigInt(seed);
    for (let i = 0; i < str.length; i++) {
      const charCode = BigInt(str.charCodeAt(i));
      hash = hash * prime + charCode;
    }
    return hash.toString();
  }