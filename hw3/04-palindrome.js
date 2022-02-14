function is_palindrome(text) {
  let count_in = (text.length % 2 == 0) ? text.length / 2 : (text.length - 1) / 2;
  let idx = 0;
  console.log("count_in: " + count_in);
  while(idx < count_in) {
    console.log("index: " + idx + " from left: " + text[idx] + " from right: " + text[text.length - idx -1]);
    if(text[idx] != text[text.length - idx -1]){ return false; }
    idx++;
  }
  return true;
}

function pal_check() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
       get: (searchParams, prop) => searchParams.get(prop),
    });
    let val = params.number;
    if(val != null) {
    document.getElementById("number").value = val;
    let res = is_palindrome(val);
    console.log("result: " + res); 
    if(res) {
        document.getElementById("result").innerText = "Yes";
    }
    }
}
