menu_list_array = [];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display").innerHTML = htmldata;  
}

function submit(){
    var htmldata;

    menu_list_array.sort();
    htmldata=""
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+"<h3>"+menu_list_array[i]+'</h3><br>';
    }
    document.getElementById("display").innerHTML = htmldata;		
}

function add_top(){
    var item=document.getElementById("add").value;
    menu_list_array.push(item);
	submit();
}
