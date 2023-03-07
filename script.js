// darkmode
const options = {
  bottom: "32px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: true, // default: true,
  label: "🌙", // default: ''
  autoMatchOsTheme: true, // default: true
};
// searchbar
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}
