var selectedRow = null;

function onFormSubmit(){
var formdata = readFormData();
if(selectedRow==null){

    insertNewRecord(formdata);
}else {

    updateRecord(formdata);
    resetForm();
}


}
function readFormData(){
var formdata = {}
formdata["fullname"]=document.getElementById("fullname").value
formdata["empcode"]=document.getElementById("empcode").value
formdata["city1"]=document.getElementById("city1").value
formdata["salary1"]=document.getElementById("salary1").value
return formdata;
}

function insertNewRecord(data){
var table  = document.getElementById("list").getElementsByTagName("tbody")[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.fullname;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.empcode;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.city1;
cell4= newRow.insertCell(3);
cell4.innerHTML = data.salary1;
cell4= newRow.insertCell(4);
cell4.innerHTML = `<button onClick="onEdit(this)" > edit <button>  <button onClick="onDelete(this)" > delete <button> `

//<a href="edit"></a>;

//`<a onClick="onEdit(this)">Edit </a/>
//<a onClick="onDelete(this)">Delete</a>`;

}

function resetForm(){


document.getElementById("fullname").value="";
document.getElementById("empcode").value="";
document.getElementById("city1").value="";
document.getElementById("salary1").value="";

selectedRow = null;

}

function onEdit(td){

    selectedRow  = td.parentElement.parentElement;

    document.getElementById("fullname").value=selectedRow.cells[0].innerHTML;
document.getElementById("empcode").value=selectedRow.cells[1].innerHTML;
document.getElementById("city1").value=selectedRow.cells[2].innerHTML;
document.getElementById("salary1").value=selectedRow.cells[3].innerHTML;
}

function updateRecord(formdata){
    selectedRow.cells[0].innerHTML=formdata.fullname;
  selectedRow.cells[1].innerHTML=formdata.empcode;
 selectedRow.cells[2].innerHTML=formdata.city1;
   selectedRow.cells[3].innerHTML=formdata.salary1;

}
function onDelete(td){

if(confirm("are u sure to del")){

row= td.parentElement.parentElement;
document.getElementById("list").deleteRow(row.rowIndex);
resetForm();

}

}