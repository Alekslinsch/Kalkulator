window.onload=function(){
  var board = document.getElementById("Scoreboard");
  board.value="";
  var sharpQuelle=0;
  var  cisloBusy=false;
  var calc={cislo1:"",
    znak:"",
    cislo2:"",
    funk:""
  };
 // rez calc.program((calculation function))
  calc.rez=function(){
    if (calc.znak=="-"){
      board.value=calc.cislo1-calc.cislo2;
   }
   if (calc.znak=="+"){
//     calc.cislo2*=(-1);
     board.value=calc.cislo1 -(-calc.cislo2);
   }
   if(calc.znak=="*"){
     board.value=calc.cislo1*calc.cislo2;
   }
   if(calc.znak=="/"){
     board.value=calc.cislo1/calc.cislo2;
   }
if(calc.znak=="AC"){
     board.value=calc.cislo1 *0;
     calc.cislo1="";
     calc.cislo1="";
   }
   if(calc.znak=="abs"){
     board.value=Mqth.abs(calc.cislo1);
   }
if(calc.znak=="+-"){
     board.value=calc.cislo1*(-1);
   }
if(calc.znak=="log"){
     board.value=Math.log(calc.cislo2)/Math.log(calc.cislo1);
   }
   if(calc.znak=="root"){
     board.value=Math.pow(calc.cislo1,(1/calc.cislo2))
   }

if(calc.znak=="^"){
    board.value=Math.pow(calc.cislo1,calc.cislo2)
   }
 }
 
 //trigonometrical function
 calc.trigonom=function(){
 
     if(calc.znak=="sinus"){
         board.value=Math.sin(calc.cislo2);
     }
 
     if(calc.znak=="cosinus"){
       
       board.value=Math.cos(calc.cislo2);
       
     }
     if(calc.znak=="tangens"){
         board.value=Math.tan(calc.cislo2);
     }
 
 if(calc.znak=="cotangens"){
         board.value=Math.sin(calc.cislo2)/Math.cos(calc.cislo2);
     }
 if(calc.znak=="arcsin"){
         board.value=Math.acos(calc.cislo2);
     }
 
 if(calc.znak=="arccosin"){
         board.value=Math.asin(calc.cislo2)
     }
      if(calc.znak=="arctangens"){
         board.value=Math.atan(calc.cislo2);
     }
 
 if(calc.znak=="arccotangens"){
         board.value=Math.atan(-calc.cislo2)+(Math.PI)/2;
     }
 }
 //Number key
  var zifra0=document.getElementById("0");
  zifra0.onclick=function(){
    board.value+=0; 
  } 
  var zifra1=document.getElementById("1");
  zifra1.onclick=function(){
    board.value+="1";
  } 
  var zifra2=document.getElementById("2");
  zifra2.onclick=function(){
    board.value+=2;
  } 
  var zifra3=document.getElementById("3");
  zifra3.onclick=function(){
    board.value+=3;
  } 
  var zifra4=document.getElementById("4");
  zifra4.onclick=function(){
    board.value+=4;
  } 
  var zifra5=document.getElementById("5");
  zifra5.onclick=function(){
    board.value+=5;
  } 
  var zifra6=document.getElementById("6");
  zifra6.onclick=function(){
    board.value+=6
  } 
  var zifra7=document.getElementById("7");
  zifra7.onclick=function(){
    board.value+=7;
  } 
  var  zifra8=document.getElementById("8");
  zifra8.onclick=function(){
    board.value+=8;
  } 
  var zifra9=document.getElementById("9");
  zifra9.onclick=function(){ 
    board.value+=9;
  } 
  var pi=document.getElementById("pi");
  pi.onclick=function(){ 
    board.value=Math.PI;
  } 
  var e=document.getElementById("e");
  e.onclick=function(){ 
    board.value=Math.E;
  } 
  var punkt=document.getElementById("punkt");
  punkt.onclick=function(){ 
    board.value+=".";
  } 
  //matematical actions
  var minus= document.getElementById("minus");
  minus.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value; 
    }
    calc.znak="-";
    board.value="";
    cisloBusy=true;
    sharpQuele=0;
  }
  var plus= document.getElementById("plus");
  plus.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value; 
    }
    calc.znak="+";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
  } 
  var divide= document.getElementById("divide");
  divide.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="/";
    board.value="";
    cisloZanjato=true;
     sharpQuele=0;
  }
  var multiply= document.getElementById("multiply");
  multiply.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="*";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
  } 
  var toZero= document.getElementById("AC");
  toZero.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="AC";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;    
  }
   var changeZnak= document.getElementById("cZ");
  changeZnak.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="cZ";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
  } 
  var abs= document.getElementById("modul");
  abs.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="cZ";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
  } 
  
  var root= document.getElementById("root");
  root.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="root";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
  } 
  var logi= document.getElementById("log");
  logi.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="log";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
  }   
  var exponent= document.getElementById("expon");
  exponent.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="^";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
  } 
//mathematic trygonometry;  
  var sinus= document.getElementById("sin");
  sinus.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="sinus";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
     calc.funk="trigonometry"
  }
  var cotangens= document.getElementById("ctg");
  cotangens.onclick=function(){
    if(cisloBusy==false){ 
      calc.cislo1=board.value;
    }
    calc.znak="cotangens";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
     calc.funk="trigonometry";
  }
  var cosinus= document.getElementById("cosin");
  cosinus.onclick=function(){  
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="cosinus";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
     calc.funk="trigonometry";
  } 
  var tangens= document.getElementById("tg");
  tangens.onclick=function(){
  
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="tangens";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
     calc.funk="trigonometry";
  }
  var arcsinus= document.getElementById("arcsin");
  arcsinus.onclick=function(){ 
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="arcsin";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
     calc.funk="trigonometry";
  }
  var arccosinus= document.getElementById("arccosin");
 arccosinus.onclick=function(){
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="arccosin";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
     calc.funk="trigonometry";
  }
  var arctangens= document.getElementById("arctg");
  arctangens.onclick=function(){ 
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="arctangens";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
     calc.funk="trigonometry";
  }
  var arccotangens= document.getElementById("arcctg");
  arccotangens.onclick=function(){ 
    if(cisloBusy==false){
      calc.cislo1=board.value;
    }
    calc.znak="arccotangens";
    board.value="";
    cisloBusy=true;
     sharpQuele=0;
     calc.funk="trigonometry";
  }
  var sharp= document.getElementById("sharp");
  sharp.onclick=function(){
  var  sharpi=calc.cislo2;
  if(sharpQuele==0){
   calc.cislo2=board.value;
//    sharpi=calc.cislo2;
    }
    else{
   calc.cislo1=board.value;  
   }
    sharpQuele+=1;
    if(calc.funk==""){
 var   resultat= new calc.rez();
}
if(calc.funk=="trigonometry"){
 var   resultat= new calc.trigonom();
}
  calc.funk="";
  }
}
