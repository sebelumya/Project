var selectedRow = null

function onFormSubmit(){
  var formData = readFromData();
  if (selectedRow == null){
      insertNewRecord(formData);}
      else{
      updateRecord(formData);
  }
  
  resetForm();
}

function readFromData(){
  var formData={};
  formData["namaProduk"] = document.getElementById("namaProduk").value;
  formData["keterangan"] = document.getElementById("keterangan").value;
  formData["harga"] = document.getElementById("harga").value;
  formData["jumlah"] = document.getElementById("jumlah").value;
  return formData;
}

function  insertNewRecord(data){
    let table = document.getElementById("arkalist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1= newRow.insertCell(0);
    cell1.innerHTML = data.namaProduk;
    cell2= newRow.insertCell(1);
    cell2.innerHTML = data.keterangan;
    cell3= newRow.insertCell(2);
    cell3.innerHTML = data.harga;
    cell4= newRow.insertCell(3);
    cell4.innerHTML = data.jumlah;
    cell5= newRow.insertCell(4);
    cell5.innerHTML = `<a href="#" onClick="onEdit(this)">Edit</a>
                      <a href="#" onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
  document.getElementById("namaProduk").value="";
  document.getElementById("keterangan").value="";
  document.getElementById("harga").value="";
  document.getElementById("jumlah").value="";
  return selectedRow;
  }

function onEdit(td){
  selectedRow = td.parentElement.parentElement;
  document.getElementById("namaProduk").value= selectedRow.cells[0].innerHTML;
  document.getElementById("keterangan").value= selectedRow.cells[1].innerHTML;
  document.getElementById("harga").value= selectedRow.cells[2].innerHTML;
  document.getElementById("jumlah").value= selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
  selectedRow.cells[0].innerHTML = formData.namaProduk;
  selectedRow.cells[1].innerHTML = formData.keterangan;
  selectedRow.cells[2].innerHTML = formData.harga;
  selectedRow.cells[3].innerHTML = formData.jumlah;
}

function onDelete(td){
  if(confirm('Apakah anda yakin ingin menghapus ini?')){
  row = td.parentElement.parentElement;
  document.getElementById('arkalist').deleteRow(row.rowIndex);
  resetForm;
  }
}

