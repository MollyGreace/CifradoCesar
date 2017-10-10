
var str = prompt(' Ingrese frase a descifrar: ');//Ingresa frase
var phrase = [str]//convierte la frase a un array
var n = 33;//
//Cifra la frase a codigo ASCII
function cifred(phrase, n){
  for(var i=0; i<phrase.length; i++){
    for(var j=0; j<n; j++){
      if((cifred[i]>=65 && cifred[i]<90) || (cifred[i]>=97 && cifred[i]<122)){ 
        cifred[i]++;               
      }else if(cifred[i]==90){
        cifred[i]='A';
      }else if(cifred[i]==122){ 
        cifred[i]='a';
      }              
    }
  }
  return cifred; 
}