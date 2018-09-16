// 
//
// var hw = function() {
//       console.log("test hw");
//       var opts = {
//               method: 'GET',
//               mode: "no-cors",
//               headers: {
//                 "Content-type": "application/json"
//                 // "x-api-key": "663dde0a-12c7-445c-a072-c66ef62f64b6"
//         }
//       }
//   // document.getElementById('hw').value
//       fetch("http://8b23f524.ngrok.io/qrcode", opts).then(
//         function(res){
//            if (res.ok) {
//              res.json()
//            }else{
//              console.log("Test");
//              return res.text();
//            }
//         }
//       )
//       .then( function(response) {
//                 console.log(JSON.stringify(response));
//                 console.log(JSON.stringify(response));
//                 console.log(response.message);
//                 // images.value =response.message;
//               });
//       .catch((e)=>{
//         console.log(e);
//       })
// }
