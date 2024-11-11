// for (let i = 0; i < localStorage.length; i++) {
//     var el = localStorage.key(i)
//     for (let i = 1; i < localStorage.getItem('len') +1; i++) {
//         var el1 = ('User' + i)
//         // var userss = JSON.parse(localStorage.getItem('User' + i));   
//         if(el1 == el){
//             var userss = JSON.parse(localStorage.getItem('User' + i));

//             var PlayerUser1 = userss.Player;
//             var StarsUser1 = userss.Stars;
//             var ShardsUser1 = userss.Shards;

//             var myTable = document.getElementById('inputtab').getElementsByTagName('tbody')[0];

//             var row = myTable.insertRow();
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
        
//             cell1.innerHTML = PlayerUser1;
//             cell2.innerHTML = StarsUser1;
//             cell3.innerHTML = ShardsUser1;
//         }
//     }
// }

let login = document.querySelector('#Password');

document.getElementById('submitpw').onclick = myFunction;
function myFunction() {
    const Login = login.value;
    var Loginn = bigIntHash(Login)

if(Loginn=='2290499198651'){
    var cod1 = 1;
}
else if(Loginn=='1723'){
    var cod2 = 1;
}
else{
    alert('Взломать меня вздумали')
}

if(cod1==1){
    var html = '';
    html += "<input id='Player' type='text' name='name' value='' placeholder='ФИ'>"
    html += "<input id='Stars' type='text' name='Stars' value='' placeholder='Звёзды'>"
    html += "<input id='Shards' type='text' name='Sgards' value='' placeholder='Черепки'>"
    html += "<br>"
    html += "<button type='button' id='11' class='bt'>Добавить Участника</button>"
    html += "<button type='button' id='22' class='btt'>Изменить Участника</button>"
    html += "<button type='button' id='33' class='bttt'>Удалить Участника</button>"
    document.getElementById("playButton").innerHTML = html;

    let Player = document.querySelector('#Player');
    let Stars = document.querySelector('#Stars');
    let Shards = document.querySelector('#Shards');

    let users = {};

    function User(Player, Stars, Shards){
        this.Player = Player;
        this.Stars = Stars;
        this.Shards = Shards;
    }

    document.getElementById('11').onclick = myFunction1;
    function myFunction1() {     
        const PlayerUser = Player.value;
        const StarsUser1 = Stars.value;
        const ShardsUser1 = Shards.value;

        var StarsUser = (STSH(StarsUser1,ShardsUser1)[0])
        var ShardsUser = (STSH(StarsUser1,ShardsUser1)[1])
    
            const user = new User(PlayerUser, StarsUser, ShardsUser);
            var len = localStorage.getItem('len')
            len++;
            localStorage.setItem('len', len);
            
            const userID = 'User' + len;
            users[userID] = user;
            
            localStorage.setItem(userID, JSON.stringify(user));
            
            var myTable = document.getElementById('inputtab').getElementsByTagName('tbody')[0];
            
            var row = myTable.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
            cell1.innerHTML = PlayerUser;
            cell2.innerHTML = StarsUser;
            cell3.innerHTML = ShardsUser;
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

function STSH(StarsUser2,ShardsUser2) {
    var StarsUser = parseInt(StarsUser2)
    StarsUser = ''
    for(i = 0; i < StarsUser2; i++) {
        StarsUser += '★';
        }
    var ShardsUser = parseInt(ShardsUser2)
    ShardsUser = ''
    for(i = 0; i < ShardsUser2; i++) {
        ShardsUser += '☠️';
    }
    return [StarsUser,ShardsUser];
}

document.getElementById('22').onclick = myFunction2;
function myFunction2() {
    for (let i = 0; i < localStorage.length; i++) {
        var el = localStorage.key(i)
        for (let i = 1; i < localStorage.getItem('len') +1; i++) {
            var el1 = ('User' + i) 
            console.log(el1)
            if(el1 == el){
                var userss = JSON.parse(localStorage.getItem('User' + i));
    
                var PlayerUser1 = userss.Player;
                var PlayerUser2 = document.querySelector('#Player');
                var PlayerUser2 = Player.value;

                let Stars = document.querySelector('#Stars');
                let Shards = document.querySelector('#Shards');

                const StarsUser2 = Stars.value;
                const ShardsUser2 = Shards.value;

                var StarsUser = (STSH(StarsUser2,ShardsUser2)[0])
                var ShardsUser = (STSH(StarsUser2,ShardsUser2)[1])

                if (PlayerUser2 == PlayerUser1){
                    localStorage.setItem(el, JSON.stringify({"Player":PlayerUser2,"Stars":StarsUser,"Shards":ShardsUser}));
                    location.assign(document.URL);
                }
            }
        }
    }
}



document.getElementById('33').onclick = myFunction3;
function myFunction3() {
    for (let i = 0; i < localStorage.length; i++) {
        var el = localStorage.key(i)  // Все элементы localStorage
        for (let i = 1; i < localStorage.getItem('len') +1; i++) {
            var el1 = ('User' + i)    // Все User
            if(el1 == el){            // Находит User в localStorage
                var userss = JSON.parse(localStorage.getItem(el1));    // User который есть в localStorage
    
                var PlayerUser1 = userss.Player;      // Player который есть в localStorage
                var PlayerUser2 = document.querySelector('#Player');        // Player который ввёл пользователь
                var PlayerUser2 = Player.value;
                
                if (PlayerUser2 == PlayerUser1){
                    var el2 = el;
                    console.log(el2);
                    localStorage.removeItem(el2);
                    location.assign(document.URL)
                }
            }
        }
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
}