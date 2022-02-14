// Enter your code here

console.log('Enter your code here');

function parse_wrapper() {
    let url = document.getElementById("comments").value;
    let parsed = parse_url(url);
    let answer = document.getElementById("result");
    document.getElementById("answer").style.display = "block";
    answer.innerText = "domain: " + parsed.domain + "\n";
    parsed.query.forEach(item => { answer.innerText += item.key + ": " + item.value + "\n"; } );
}

function parse_url(url) {
    if(url.length == 0) { 
        window.alert("please enter a url"); 
    }
    let result = {
        domain: null,
        query: null, 
    };
    let parts_major = url.split("?");
    let query_part = parts_major[1]; 
    if(query_part == null){
        console.log("no query parameters");
        return;
    }
    let args = query_part.split("&");
    result.query = args.map(arg => {
        let element = {
            key: null,
            value: null,
        };
        let parts = arg.split("=");
        element.key = parts[0];
        element.value = (parts.length == 1) ? null : parts[1];
        return element; 
    });
    var domain_parts = null;
    let domain_check = parts_major[0].split("://");
    if(domain_check[0] != "https" && domain_check[0] != "http" && domain_check[0] != "file") {
        domain_parts = domain_check[0];
    }else{
        domain_parts = domain_check[1];
    }
    let domain_path = domain_parts.split("/");
    console.log("domain: " + domain_path[0]);
    console.log("path: " + (domain_path[1] == null) ? "index.html" : domain_path[1]);  
    result.domain = domain_path[0]; 
    return result;
}

// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
