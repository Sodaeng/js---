<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" class="input1" />
    <input type="text" class="input2" />
    <button onclick="equalCheck()">check</button>
    <div id ="result"></div>
    <script>
	  	function equalCheck(){
	  		const input1 = document.querySelector('.input1').value;
	  		const input2 = document.querySelector('.input2').value;
	  		let result="";
        for(let i=0; i<input1; i++) {
          let star="";
          for(let j=input1-1; j>i; j--){
            star+="&nbsp";
          }
          for(let j=0; j<2*i+1; j++) {
            star+="*";
          }
	  		  document.querySelector("#result").innerHTML+= `<div>${star}</div>`;
        }
	  	}
    </script>
</body>
</html>