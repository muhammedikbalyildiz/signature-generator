document.getElementById("submitBtn").addEventListener("click", function() {

    var name = document.getElementById("name").value;
    var position = document.getElementById("position").value;
    var company = document.getElementById("company").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var logo = document.getElementById("logo").value;

    document.getElementById("resultName").textContent = name;
    document.getElementById("resultPosition").textContent = position;
    document.getElementById("resultCompany").textContent = company;
    document.getElementById("resultPhone").textContent = phone;
    document.getElementById("resultEmail").textContent = email;
    document.getElementById("resultAddress").textContent = address;
    document.getElementById("resultLogo").src = logo;
    
    document.getElementById("infoForm").style.display = "none";
    document.getElementById("output-container").style.display = "flex";

    alert(`<style>
  
    body {
      font-family: 'AvenirNextLTPro', Arial, sans-serif;
    }
  
    #output-container {
      display: flex;
    }
  
    .image {
        max-width: 50%;
        position: relative;
        top: 30px;
      }
  
    .user-info {
      flex: 1;
      padding: 20px;
      line-height: 1.0;
    }
  
    #resultName {
      font-weight: bold;
    }
  
    #resultPosition {
      color: gray;
      font-style: italic;
    }
  
    #resultCompany {
      color: red;
    }
  
    #resultPhone {
      color: blue;
      text-decoration: underline;
    }
  
    #resultEmail {
      color: green;
      text-decoration: underline;
    }
  
    #resultAddress {
      color: blueviolet;
      text-decoration: underline;
    }
  
    #output-container .contact-info h4 {
      display: inline;
      margin-right: 20px;
    }
  </style>
  
  <div id="output-container">
    <div class="image">
      <img id="resultLogo" src="${logo}" height="200" alt="Company Logo">
    </div>
    <div class="user-info">
      <h4><span id="resultName">${name}</span></h4>
      <h4><span id="resultPosition">${position}</span></h4>
      <h4><span id="resultCompany">${company}</span></h4>
  
      <div class="contact-info">
        <h4><span id="resultPhone">${phone}</span></h4>
        <h4><span id="resultEmail">${email}</span></h4>
        
      </div>
      <h4><span id="resultAddress">${address}</span></h4>

    </div>
  </div>
  `);

});

function displayLogo(logo) {
    var logoDisplay = document.getElementById("resultLogo");

    if (logo) {
        var reader = new FileReader();

        reader.onload = function(e) {
            logoDisplay.src = e.target.result;
        };

        reader.readAsDataURL(logo);
        logoDisplay.style.display = "block";
    } else {
        logoDisplay.style.display = "none";
    }
}


