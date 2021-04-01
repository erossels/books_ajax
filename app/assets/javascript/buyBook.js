
  $('#btn-buy').on('click',function(){
    displayTimer(120000)
    
  })
  
  function displayTimer(miliseconds) {
    console.log("Estoy en la función timer")
    disablePay()
    let end = miliseconds / 1000 ;
    let min = $("#minutes");
    let sec = $("#seconds");
    if (end > 0 ) {
      let ticker = setInterval( function (){
      end--;
      if (end <= 0 ) { 
        clearInterval(ticker)
        ;  
      }
      let secs = end;
      let mins = Math.floor(secs / 60 ); // 1 min = 60 secs
      secs -= mins * 60 ;
      min.html(("00" + mins).slice( -2 ));
      sec.html(("00" + secs).slice( -2 ));
      }, 1000);
    }
  }

  function disablePay() {
    $('#btn-buy').prop('disabled', true);
    console.log("Estoy en el disable")
  };
