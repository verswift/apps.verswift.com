function getHistory(){
  return document.getElementById("history-value").innerText;
}

// use the name set history instead of print
function printHistory(number){
  document.getElementById("history-value").innerText = number;
}

function printOutput(number){
  if (number == ""){
    document.getElementById("output-value").innerText = number;
  }
  else{
    document.getElementById("output-value").innerText = getFormattedNumber(number);
  }
}

function getOutput(number){
  return document.getElementById("output-value").innerText;
}

function getFormattedNumber(number){
  // prevent NaN when using backspace on negative numbers e.g. -7 --> -
  if (number == "-"){
    return "";
  }
  var n = Number(number);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(number)
{
  // change the number from commma seperated representation to normal
  return Number(number.replace(/,/g,''));
}


// note - currently changes the size of the calculator
// get the operations
var operators = document.getElementsByClassName("operator");
for (var i = 0; i < operators.length; i++)
{
  operators[i].addEventListener('click',function(){
    // for the clear button
    if(this.id == "clear"){
      // clear the history
      printHistory("");
      // clear the output
      printOutput("");
    }

    else if (this.id == "backspace"){
      var output = reverseNumberFormat(getOutput()).toString();
      if(output){// if output has a value
        // remove the last added number to the string
        output = output.substr(0, output.length - 1);
        printOutput(output);
    }
  }

  else{
    var output = getOutput();
    var history = getHistory();
    if(output == "" && history != ""){
      // check if the last character was an operator by using not a number
      if(isNaN(history[history.length - 1]))
      {
        // remove the last character (don't want to add another operator )
        history = history. substr(0, history.length - 1);
      }
    }
    if(output != "" || history != ""){
      // conditional operator
      output = (output == "") ? output:reverseNumberFormat(output);
      // add the output to the history value
      history = history + output;
      if (this.id == "="){
        // calculate the contents of history
        var result = eval(history);
        printOutput(result);
        printHistory("")
      }
      // for other operators, the output is set to empty and they're
      // concatenated to the history
      else{
        history = history + this.id;
        printHistory(history);
        printOutput("");
      }
    }
  }

  })
}


// get the numbers
var numbers = document.getElementsByClassName("number");
for (var i = 0; i < numbers.length; i++)
{
  numbers[i].addEventListener('click',function(){
    var output = reverseNumberFormat(getOutput());
    // check the output is a number
    if(output != NaN){
      // the partiicular number is added to the string
      output = output + this.id;
      printOutput(output);
    }
  })
}
