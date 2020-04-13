let fact = document.querySelector('#fact');
      let factText = document.querySelector('#factText');
      let numberInput = document.querySelector('#numberInput');
      <!--
      numberInput.addEventListener('input', getFactAjax);

      function getFactAjax()
      {
        let number = numberInput.value;
        let xhr = new XMLHttpRequest();
        ///xhr.open('GET', 'https://numbersapi.com/' + number);
        //xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + number);
        xhr.open('GET', 'https://qrng.anu.edu.au/API/jsonI.php?length=' + number + '&type=uint16');
        xhr.onload = function()
        {
          // need to check http status to make sure that everything is ok
          if(this.status == 200 && number != '')
          {
            console.log(this.responseText)
            // make the div visible
            fact.style.display = 'block';
            var obj = JSON.parse(this.responseText);

            factText.innerText = obj.data;
          }
        }
        // send the request
        xhr.send();
      }