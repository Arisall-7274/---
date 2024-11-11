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

    var PlayerUser1 = data[i].Player;
    var ProgressUser1 = data[i].Progress;

    var myTable = document.getElementById('inputtab').getElementsByTagName('tbody')[0];

    var row = myTable.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = PlayerUser1;
    cell2.innerHTML = ProgressUser1;
}
}


var obj = {
    table: []
};


obj.table.push({id: 1, square:2});

var json = JSON.stringify(obj);