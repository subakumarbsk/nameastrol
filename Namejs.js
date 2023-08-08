const sampo = document.getElementById("sampo");
const sampt = document.getElementById("sampt");
const sampth = document.getElementById("sampth");
const sampf = document.getElementById("sampf");
const sampfi = document.getElementById("sampfi");
const inp = document.getElementById("nameinput");
const clas = document.getElementById("inc");
const btn = document.getElementById("trybtn");
var ran = Math.random();
const vid = document.getElementById("video");
var sou = document.getElementById("sour");
var lucvalue = document.getElementById("luckvalue");
var get = document.getElementById("get");
var store = [];
var badarr = ["bad video/kalyanavalkai.mp4","bad video/doctorefil.mp4","bad video/msbaskar.mp4","bad video/msbaskarmar.mp4","bad video/sagunisamiyar.mp4"]
var worst = ["verybad/fraud.mp4","verybad/doctoedie.mp4","verybad/Kumki josiyam.mp4"]
var goodarr =["successvideo/onpathugragam.mp4","successvideo/pm.mp4","successvideo/rajini.mp4"]
// Click Function
function clk(){
    var inv = inp.value;
    var inl = inv.length;
    var invup = inv.toUpperCase();
    if(inl<=2){
        sampo.innerHTML="Enter The Correct Word";
    }
    else{
       namecheck(invup);
    }
}

// Random Group
function rando(invup,inl){
    var namearr = [];
    var namestr = "";
    var newarr = [];
    for(i=0;namearr.length<inl;i++){
        var x = Math.floor(Math.random()*inl);
        if(namearr.includes(x)){
            continue;
        }
        else{
            namearr.push(x);
           newarr.push(x) ;
        }
    }
    for(i=0;i<inl;i++){
       var arychar = namearr[i];
       var namechar = invup.charAt(arychar);
       namestr=namestr+namechar;
    }
    luck(invup,namearr,namestr);
}
// LuckValue Calculation
function luck(invup,namearr,namestr){
    var indluck = 0;
    var comluck =0;
    const x = namestr;
    const l = invup.length;
    const total = 100;
    const val = 100/l; 
    for(i=0;i<namearr.length;i++){
        if(namestr[i]==invup[i]){
            if(l<=6){
                indluck+=val;
            }
            else if(l<=15){
                indluck = indluck+(2*val);
            }
            else{
                indluck = indluck*indluck;
            }  
        }
    }
    if(l>=6){
        if(indluck<60){
            for(i=0;i<=l;i++){
              y =  x.slice(i,i+2);
              if(namestr.includes(y)){
                comluck = comluck+val;
              }
            }
            indluck=Math.floor((indluck+comluck)/2);
        }
        else{
            if(indluck>100){
                indluck=95;
            }
        }
        
    }
        luckval(invup,indluck,namestr);
        output(invup,indluck,namestr);
    }


// Luck Declaration
function luckval(invup,lu,namestr){
    if(lu>=0 && lu<=30){
        sampf.innerHTML="Your Luck is Bad";
        var x = Math.floor(Math.random()*worst.length);
        vid.src=worst[x];
        get.className="outervbad";
    }
    else if(lu>=31 && lu<=65){
        sampf.innerHTML="Not Bad or Good";
        var x = Math.floor(Math.random()*badarr.length);
        vid.src=badarr[x];
        get.className="outerbad";
    }
    else if(lu>=66 && lu<=90){
        sampf.innerHTML="Your Luck is Good";
        var x = Math.floor(Math.random()*goodarr.length);
        vid.src=goodarr[x];
        get.className="outer";
    }
    else if(lu>=91 && lu<=100){
        sampf.innerHTML="Born To Win";
        var x = Math.floor(Math.random()*goodarr.length);
        vid.src=goodarr[x];
        get.className="outer";
    }
}
function output(invup,luckavg,namestr){
    sampo.innerHTML="Your Name is - "+" "+invup;
    vid.play();
    document.getElementById("restbt").style.display="inline-block";
    document.getElementById("get").style.display="block";
    lucvalue.innerHTML=Math.ceil(luckavg)+"%";
    
}
function pause(){
    vid.pause();
}
function rst(){
    var inv = inp.value;
    var inl = inv.length;
    var invup = inv.toUpperCase();
    if(vid.plaused){
        vid.play();
    }
    else{
        vid.pause();
    }
}
function namecheck(x){
    for(i=0;i<=store.length;i++){
        if(store[i]==x){
            sampo.innerHTML="Try Tomorow or Click Remove Button";
        }
        else{
             rando(x,x.length);
             break;
        }
    }
}
