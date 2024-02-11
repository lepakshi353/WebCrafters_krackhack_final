function increaseCount(spanId) {
    
    var countElement = document.getElementById(spanId);
    var count=prompt("how much to add");
    var currentCount = parseInt(countElement.textContent);
    if(isValidInteger(count)){
        var newCount = currentCount + parseInt(count);
        if (newCount >= 0) {
            countElement.textContent = newCount;
          }

    }
    else{
        alert("please enter a vlid integer");
    }
    

   // Ensure the count doesn't go below 0
    
    
  }
  function decreaseCount(spanId) {
    
    var countElement = document.getElementById(spanId);
    var count=prompt("how much it is used");
    var currentCount = parseInt(countElement.textContent);
    if(isValidInteger(count)){
        var newCount = currentCount - parseInt(count);
        if (newCount >= 0) {
            countElement.textContent = newCount;
          }
          else{
              alert("can't use this much")
          }

    }
    else{
        alert("please enter a vlid integer");
    }
    

   // Ensure the count doesn't go below 0
    
  }
  function isValidInteger(value) {
    // Check if the value is a non-empty string and can be parsed as an integer
    return value !== null && value.trim() !== '' && !isNaN(parseInt(value, 10));
  }