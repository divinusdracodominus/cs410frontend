import './index.css';
import axios from 'axios';

let url = 'https://thronesapi.com/api/v2/Characters';
function GOTSearch() {
  function submit(event) {
    event.preventDefault();
    var text = document.getElementById("got_search_bar").value;
    console.log("search text: " + text);
    fetch(url, {
      "methtod": "GET"
    }).then(response => response.json()).then(elements => {
      var result = null;
      console.log("all: " + JSON.stringify(elements));
      elements.forEach(character => { 
          if(character.fullName == text) { 
              result = character; 
          }
          console.log("searching for: " + text + " current: " + character.fullName);
      });
      console.log(JSON.stringify(result));
      if(result != null) {
        let res = document.createElement("figure");
        let pic = document.createElement("img");
      
        pic.setAttribute("src", result.imageUrl);
        let caption = document.createElement("figcaption");
        caption.innerText = result.fullName;
        res.appendChild(pic);
        res.appendChild(caption);
        document.getElementById("search_result").appendChild(res); 
      }else{
        document.getElementById("search_result").innerText = "No Results Found";
      }
    }).catch(e => { console.log("error: " + e); }); 
  }
  return (
    <div id="got_search" className="main_chart">
    <div id="inputForm">
      <script src="https://rawgit.com/farzher/fuzzysort/master/fuzzysort.js"></script>
      <form onSubmit={submit}>
        <input type="text" id="got_search_bar" name="name"/>
        <input type="submit" onSubmit={GOTSearch} value="submit"/> 
      </form>
    </div>
    <div id="search_result">
      
    </div>
    </div>
  );
}

export default GOTSearch;
