//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=40; timeIni=40; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=3;
var score=0; scoreMax=6; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Iniciar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#8080FF"; colorText="#000000"; colorSele="#FF0000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excelente!!"; messageTime=""; messageError="Intentalo otra vez"; messageErrorG="Intentalo otra vez"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008080"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["VHJpw6FuZ3Vsbw==","UGVudMOhZ29ubw==","SGV4w6Fnb25v","T2N0w6Fnb25v","Q3VhZHJhZG8=","SGVwdMOhZ29ubw=="];
var img_G=["","","","","",""];
var mp3_G=["","","","","",""];
var ogg_G=["","","","","",""];
var n_G=["MQ==","Mg==","Mw==","NA==","NQ==","Ng=="];
var e_G=["","","","","",""];
var mp4_G=["","","","","",""];
var ogv_G=["","","","","",""];
var alt_G=["","","","","",""];
var txtGr=["Tres lados","Cinco lados","Seis lados","Ocho lados","Cuatro lados","Siete lados"];
var imgGr=["0_Tri__ngulo.png","0_Pentagono.png","0_Hexagono.png","0_octagono.png","0_cuadrado.png","0_heptagono.png"];
var mp3Gr=["","","","","",""];
var oggGr=["","","","","",""];
var altGr=["","","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1];
var messageErrorG="Intentalo otra vez";
var dirMedia="index_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var imaW=["0","0","0","0","0","0"];
var imaH=["0","0","0","0","0","0"];
var info=["","","","","",""];
