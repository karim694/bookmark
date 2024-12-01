var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

var siteList = [];
if (JSON.parse(localStorage.getItem("siteContainer")) !== null) {
  siteList = JSON.parse(localStorage.getItem("siteContainer"));
  displayData();
}

function addSite() {
  if (validationsiteName() && validationsiteUrl()) {
    var site = {
      name: siteName.value.trim(),
      Url: siteUrl.value.trim(),
    };
    siteList.push(site);
    localStorage.setItem("siteContainer", JSON.stringify(siteList));

    displayData();
    clearForm();
  }
}
function displayData() {
  var blackBox = "";
  for (var i = 0; i < siteList.length; i++) {
    blackBox += `     <tr>
              <td>${i + 1}</td>
              <td>${siteList[i].name}</td>
              <td>
            <a href="${siteList[i].Url}" class="btn my-btn1">  <i class="fa-solid fa-eye me-1"></i> Visit</a></td>
              <td>
                <button onclick="deleteItem(${i})" type="button" class="btn btn-danger ">
                  <i class="fa-solid fa-trash-can"></i> Delete
                </button>
              </td>
            </tr>`;
  }
  document.getElementById("tableContent").innerHTML = blackBox;
}
function clearForm() {
  siteName.value = null;
  siteUrl.value = null;
  siteName.classList.remove("is-valid");
  siteUrl.classList.remove("is-valid");
  
}
function deleteItem(index) {
  siteList.splice(index, 1);
  localStorage.setItem("siteContainer", JSON.stringify(siteList));
  displayData();
}
function validationsiteName() {
    var regex = /^[A-Za-z]{1,10}[ A-Za-z0-9]{2,10}$/;
    var text = siteName.value;
    var msgName=document.getElementById('msgName')
    if (regex.test(text)) {
      siteName.classList.add("is-valid");
     siteName.classList.remove("is-invalid");
     msgName.classList.add('d-none');
      return true;
    } else {
      siteName.classList.remove("is-valid");
    siteName.classList.add("is-invalid");
    msgName.classList.remove('d-none');
      return false;
    }
  }
function validationsiteUrl() {
  var regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)$/;
  var text = siteUrl.value;
  var msgUrl=document.getElementById('msgUrl')
  if (regex.test(text)) {
    siteUrl.classList.add("is-valid");
    siteUrl.classList.remove("is-invalid");
    msgUrl.classList.add('d-none');
    return true;
  } else {
    siteUrl.classList.add("is-invalid");
    siteUrl.classList.remove("is-valid");
  msgUrl.classList.remove('d-none')
    return false;
  }
}




  
