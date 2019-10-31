const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
export class AjaxAPI {
    constructor(){}
    
    ajaxGet = async function(call = "") {
        var xhr = new XMLHttpRequest();
        return new Promise(function(resolve, reject) {
         xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
              if (xhr.status >= 300) {
                reject("Error, status code = " + xhr.status)
              } else {
                resolve(xhr.responseText);
              }
            }
          }
          xhr.open('get', call, true)
          xhr.setRequestHeader("x-rapidapi-host", "numbersapi.p.rapidapi.com");
          xhr.setRequestHeader("x-rapidapi-key", "3af32a6ea1mshb12e571fbf8252bp10bd9bjsn6ebcbe1ff176");
          xhr.send();
        });
      }

    ajaxGetFactDate = async function(day, month){
        try {
            let call = "https://numbersapi.p.rapidapi.com/"+day+"/"+month+"/date?fragment=true&json=true"
            let response = await this.ajaxGet(call)
            
            return response
          } catch (err) {
            console.log(err)
          }
    }
}

