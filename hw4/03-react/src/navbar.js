import './index.css';
function Navbar() {
  function home() {
    document.getElementById("chart_page").style.display = "none";
    document.getElementById("got_search").style.display = "none"; 
    document.getElementById("home_msg").style.display = "block";
  }
  function search() {
    document.getElementById("chart_page").style.display = "none";
    document.getElementById("got_search").style.display = "block";
    document.getElementById("home_msg").style.display = "none";
  }
  function chart() {
    document.getElementById("got_search").style.display = "none";
    document.getElementById("chart_page").style.display = "block";
    document.getElementById("home_msg").style.display = "none";
  }
  return (
    <div className="navbar" id="navbar">
      <button className="navbtn" onClick={home}>home</button>
      <button className="navbtn" onClick={search}>search</button>
      <button className="navbtn" onClick={chart}>chart</button>
    </div> 
  );
}

export default Navbar;
