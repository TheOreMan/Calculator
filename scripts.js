function sumIt() {
  var x=Number(document.getElementById("x").value);
  var y=Number(document.getElementById("y").value);
  fetch('http://127.0.0.1:9999/calculate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({x:x,y:y}),
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('sum').innerHTML = data.sum;
  })
  .catch(error => {
      console.error('Error:', error);
  });
}
