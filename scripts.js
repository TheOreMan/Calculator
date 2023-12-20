function sumIt() {
  var x=Number(document.getElementById("x").value);
  var y=Number(document.getElementById("y").value);

  const response = await fetch('/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({x:x,y:y}),
            });

            const data = await response.json();
            document.getElementById("sum").innerText=data.sum;

}
