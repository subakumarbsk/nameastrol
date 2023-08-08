<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Name Fun</title>
    <link rel="stylesheet" href="name.css">
</head>
<body>
    <header>
        <h1>Welcome to Name Fun Zone</h1>
    </header>
    <main>
        <p>Check Toda'y luck</p><br>
        <label for="name">Enter your Name</label>
        <input class="nameinput" id="nameinput" placeholder="Enter name in Small Letters" type="text" autofocus="on" autocomplete="on" required>
        <br><br>
        <button type="submit" id="trybtn" onclick="clk()">Try It</button>
        <button type="reset" id="restbt" class="restbtn" onclick="rst()">Pause</button>
        <div id="inc"></div>
        <div class="resultcontainer">
             <video id="video" width="320" height="240" controls style="display: none;">
                <source id="sour" src="bad video/kalyanavalkai.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            <p id="sampo"> Try Your Luck </p><br>
            <p id="sampt">
            </p><br>
            <p id="sampth"></p><br>
            <p id="sampf"></p><br>
            <p id="sampfi">
                    <div class="outer" id="get">
                        <div class="inner">
                            <p id="luckvalue">0</p>
                        </div>
                    </div>
            </p><br>
            
        </div>
    </main>
       
    <script src="Namejs.js"></script>
</body>
</html>
body{
    background-color: azure;
}
h1{
    text-align: center;
    padding-top: 20px;
    width: 100%;
    height: 50px;
    background-image: url('OIP.jpeg');
    color: rgb(3, 110, 110);
}
.resultcontainer{
    text-align: center;
}
main{
    background-image: url('OIP.jpeg');
    background-repeat: repeat;
    background-size: cover;
    text-align: center;
    background-color: azure;
}
label{
    font-size: 20px;
}
input{
    margin-top: 40px;
    padding-left: 20px;
    border-radius: 20px;
    margin-left: 50px;
    width: 300px;
    height: 40px;
    font-size: 15px;
}
button{
    margin-left: 50px;
    background-color: whitesmoke;
    color: rgb(83, 184, 83);
    margin-top: 30px;
    margin-bottom: 40px;
    box-shadow: 2px 2px 3px red;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    width: 100px;
}
.restbtn{
    display: none;
}
.restbtn:hover{
    background-color: rgb(191, 93, 36);
}
#trybtn:hover{
    background-color: rgb(217, 239, 52);
    color: rgb(8, 76, 135);
}

.outer{
    margin-left: 40%;
    border: 3px solid black;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: none;
    box-shadow: inset 10px 10px 25px rgb(0, 255, 4), inset -10px -10px 25px rgb(207, 205, 57) ;
}
.outerbad{
    margin-left: 40%;
    border: 3px solid black;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    /*display: none;*/
    box-shadow: inset 10px 10px 20px red, inset -10px -10px 25px gray ;
}
.outervbad{
    margin-left: 40%;
    border: 3px solid black;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    /*display: none;*/
    box-shadow: inset 10px 10px 25px rgb(79, 75, 75), inset -10px -10px 25px gray ;
}
.inner{
    margin: 13.8%;
    border: 3px solid black;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: grid;
    place-items: center;
}
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
