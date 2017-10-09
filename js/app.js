//Cifra la frase a codigo ASCII
function cifred(phrase, n){
  var phraseCifred = [];
  phraseCifred = phrase.length();
  phraseCifred=phrase.toCharArray();
  for(var i=0; i<phrase.length; i++){
    for(var j=0; j<n; j++){
      if((phraseCifred[i]>=65 && phraseCifred[i]<90) || (phraseCifred[i]>=97 && phraseCifred[i]<122)){ 
        phraseCifred[i]++;               
      }else if(phraseCifred[i]==90){
        phraseCifred[i]='A';
      }else if(phraseCifred[i]==122){ 
        phraseCifred[i]='a';
      }              
    }
  }
  phrase = String.valueOf(phraseCifred); 
  return phraseCifred; 
}

function descifred(phraseDescifred, n){
phraseDescifred = []
phraseDescifred = phrase.toCharArray(); 
 
        for(i=0;i<phrase.length();i++){ 
            for(j=0;j<n;j++){ 
                if((phraseDescifred[i]>65 && phraseDescifred[i]<=90) || (phraseDescifred[i]>97 && phraseDescifred[i]<=122)){ 
                  phraseDescifred[i]--;               
                } 
                else if(phraseDescifred[i]==65) 
                phraseDescifred[i]='Z'; 
                else if(phraseDescifred[i]==97) 
                phraseDescifred[i]='z'; 
            } 
        } 
 
        phrase = String.valueOf(phraseDescifred); 
 
        return phrase; 
}
