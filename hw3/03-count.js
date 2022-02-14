function find_all(source, find) {
  if (!source) {
    return [];
  }
  if (!find) {
    return source.split('').map(function(_, i) { return i; });
  }
  var result = [];
  for (i = 0; i < source.length; ++i) {
    if (source.substring(i, i + find.length) == find) {
      result.push(i);
    }
  }
  return result;
}


function highlight() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
    let term = params.input;
    var text = document.getElementById("intro").innerHTML;
    let first_length = text.length;
    if(term == null) { return; }
    //let term = document.getElementById("userinput").value;
    let indexes = find_all(text,term);
    console.log("indexes: " + indexes);
    let count = 0; 
    let increase = 0;
    while(count < indexes.length){
      let idx = indexes[count]+increase; 
      let end = idx + term.length;
      console.log("idx: " + idx + " end: " + end);
      let mod = "<span style='background-color:yellow;'>";
      let mod_end = "</span>";
      increase += mod.length;
      increase += mod_end.length;
      let res = [text.slice(0,idx), mod, text.slice(idx,end), mod_end, text.slice(end)].join('');
      console.log(res); 
      text = res; 
      count += 1; 
    }
    
    document.getElementById("intro").innerHTML = text;
} 
