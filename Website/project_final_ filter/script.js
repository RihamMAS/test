// function getProducts() {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "../ProtectedAPIs.json", true);

//     xhr.onload = function () {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             try {
//                 var data = JSON.parse(xhr.responseText);
//                 console.log("hello :")


//                 for (var i = 0; i < data.length; i++) {

//                         var input = data[i] 

//                         var Tname = input.name

//                         var description = input.descibtion

//                         var importance1 = input.importance1

//                         var importance2 = input.importance2

//                         var importance3 = input.importance3

//                 }


//             } catch (error) {
//                 console.error("Error parsing JSON:", error);
//             }
//         } else {
//             console.error("Request failed with status code: " + xhr.status);
//         }
//     };

//     xhr.send();
// }

// getProducts()



// function getProducts() {
//     var xpro = new XMLHttpRequest()
//     xpro.open("GET", './ProtectedAPIs.json')
//     xpro.send()
//     xpro.addEventListener("readystatechange", function () {
//         if (xpro.readyState == 4) {
//             var response1 = JSON.parse(xpro.response);
//             for (var i = 0; i < response1.length; i++) {
//                 var pro = response1[i]
//                 var name = pro.name
//                 // var img = pro.img
//                 var discription = pro.discription
//                 var div = document.getElementById("area")
//                 // var img = document.createElement("img")
//                 // img.src = img
//                 var d = document.createElement("p")
//                 d.innerHTML = "Name:" + name + discription  
//                 // d.append(img)
//                 d.setAttribute("class", "item")
//                 div.append(d)
//             }
//         }
//     })
// }
//    getProducts()
