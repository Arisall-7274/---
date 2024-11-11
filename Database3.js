fetch('basa.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function appendData(data) {
// let mainContainer = document.getElementById("myData");
for (let i = 0; i < data.length; i++) {
    // console.log(data[i])
    // let div = document.createElement("div");
    // div.innerHTML = data[i].Player + ' ' + data[i].Stars + ' ' + data[i].Shards;
    // mainContainer.appendChild(div);

    if(data[i].User == "Text3"){
        document.getElementById("demo").innerHTML = data[i].Text;
    }

}
}


var obj = {
    table: []
};


obj.table.push({id: 1, square:2});

var json = JSON.stringify(obj);