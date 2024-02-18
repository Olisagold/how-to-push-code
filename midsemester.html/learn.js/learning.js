<!DOCTYPE html>
 <html>
 <body>
 <h2>My First JavaScript</h2>
 <button type="button"
 onclick="document.getElementById('demo').innerHTML = Date()">
 Click me to display Date and Time.</button>
 <p id="demo"></p>
 <script> 
    function myfunction(p1, p2) {
        return p1 * p2;
    }
    let result = myFunction(4, 3);
    document.getElementById("demo").innerHTML = result;
    const hour = new date().getHours();
    result
 </script>
 </body>
 </html>