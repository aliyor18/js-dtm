var elSiteForm = document.querySelector(".site-form");
var elSiteInput = elSiteForm.querySelector(".input-form");
var elSiteSelect = elSiteForm.querySelector(".input-select");
var elP = document.querySelector(".hero__desc");

var elOutput = document.querySelector(".form-output");

elSiteForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var inputValue = Number(elSiteInput.value);
  var selectValue = (elSiteSelect.value);


  if (inputValue >= 100  &&  inputValue <=  130) {
    elOutput.textContent = "Siz super kontrakt asosida o'qishga kirdingiz!"
  }
  else if (inputValue >= 131  &&  inputValue <=  150) {
    elOutput.textContent = "Siz kontrakt asosida o'qishga kirdingiz!"
  } 
  else if (inputValue >= 151  &&  inputValue <= 180) {
    elOutput.textContent = "Siz grand asosida o'qishga kirdingiz!";
  }
  else if (inputValue > 180) {
    elOutput.textContent = "Maksimal ball 180!!!";
  }
  else if (inputValue <= 0) {
    elOutput.textContent = "Iltimos 0 yoki undan kichik son kiritmang!";
  }
  else if (isNaN(inputValue)) {
    elOutput.textContent = "Iltimos son kiriting!";
  }
  else {
    elOutput.textContent = "Uzr siz o'qishga kira olmadingiz!";
  }
    elP.textContent = ` ${selectValue} `;
})