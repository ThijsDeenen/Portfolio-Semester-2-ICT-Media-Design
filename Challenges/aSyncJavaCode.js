let xmlhttp = new XMLHttpRequest();
const url = "links.txt";

xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let array = JSON.parse(this.responseText);
        myFunction(array);
    }
};
xmlhttp.open("GET", url, true)
xmlhttp.send();

function myFunction(arr) {
    let out = "";
    let i;
    for(i = 0; i < arr.length; i++) {
      out += '<a href="' + arr[i].url + '">' + 
      arr[i].display + '</a><br>';
    }
    document.getElementById("div").innerHTML = out;
}
