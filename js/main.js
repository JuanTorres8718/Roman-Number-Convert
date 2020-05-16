const fun =()=>{
  const pResponse = document.querySelector('.response')
  pResponse.innerHTML= ``;
}

function convertToRoman() {
    let num = document.querySelector('#number').value;
    if(num>0 && num<=3999){
      let cont="";
      let unidad = num%10;
      num = Math.trunc(num /=10);
      let decenas = num%10;
      num = Math.trunc(num /=10);
      let centenas = num%10;
      num = Math.trunc(num /=10);
      let millar = num%10;
      num = Math.trunc(num /=10);
    
    
      switch (millar){
        case 1: cont += "M"; break;
        case 2: cont += "MM"; break;
        case 3: cont += "MMM"; break;
      }
    
      switch (centenas){
        case 1: cont += "C"; break;
        case 2: cont += "CC"; break;
        case 3: cont += "CCC"; break;
        case 4: cont += "CD"; break;
        case 5: cont += "D"; break;
        case 6: cont += "DC"; break;
        case 7: cont += "DCC"; break;
        case 8: cont += "DCCC"; break;
        case 9: cont += "CM"; break;
      }
    
      switch (decenas){
        case 1: cont += "X"; break;
        case 2: cont += "XX"; break;
        case 3: cont += "XXX"; break;
        case 4: cont += "XL"; break;
        case 5: cont += "L"; break;
        case 6: cont += "LX"; break;
        case 7: cont += "LXX"; break;
        case 8: cont += "LXXX"; break;
        case 9: cont += "XC"; break;
      }
    
      switch (unidad){
        case 1: cont += "I"; break;
        case 2: cont += "II"; break;
        case 3: cont += "III"; break;
        case 4: cont += "IV"; break;
        case 5: cont += "V"; break;
        case 6: cont += "VI"; break;
        case 7: cont += "VII"; break;
        case 8: cont += "VIII"; break;
        case 9: cont += "IX"; break;
      }
     
      const input = document.querySelector('#romanNumber')
      input.value = cont;
      document.querySelector('#number').value = "";

    }else {
      const pResponse= document.querySelector('.response')
      pResponse.setAttribute('style','color:red');
      pResponse.innerHTML= `Sorry,  but the number must be between 1 and 3999`;
      setTimeout(fun ,5000);
    }

  }
  
  
  // console.log(convertToRoman(3999))
const btn = document.querySelector('#send')

btn.addEventListener('click', convertToRoman);