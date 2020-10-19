
//var ograph = require('open-graph');

//CONFIGURATION
var linkLimit = 15;
//var currentURL = "http://localhost:5004";
var currentURL = "https://linkity.link";

//Globals
var lazyLinkVariable ="";
var welcomeText="";
var targetId="";
var links = 1;
var completeLinks = 0;
var linkMemmory;
var newText="" ;
var realTimeUrl="";
addNextLinkFunction = null;
return404Function = null;
welcomeFunction = null;
revealRoutine = null;
concealRoutine = null;
markErrorRoutine = null;
unMarkErrorRoutine=null;
moveBackRoutine=null;
updateRealTimeUrl=null;

//Functions
//const aborter = new AbortController();
//const abortFetch = aborter.signal;

function gatherDecentUrls(){
	//Ideally we check for spaces
	//But if someone exploits a certain feature we'll just remove that from the list of links
	//console.log("Title:"+document.getElementById("title").value);
	ourTitle = document.getElementById("title").value;

	if(ourTitle===""){
		alert("Hey! Make sure you add a title!");
		return 0;
	}
	if(ourTitle.length > 100){
		alert("Hey! That title's too long!");
		return 0;
	}
	ourLinks = []
	for(var i=1;i<linkLimit+1;i++){
		//console.log(i+":"+document.getElementById("linkinput"+i).value);
		console.log(document.getElementById("linkinput"+i).length);
		if(document.getElementById("linkinput"+i).value!=="" && document.getElementById("linkinput"+i).value.length <= 2000){
			var linkData = {link:document.getElementById("linkinput"+i).value, backupmade: false};
			//ourLinks.push(document.getElementById("linkinput"+i).value);
			ourLinks.push(linkData);
		}
	}
	if(!ourLinks.length){
		alert("Hey! We need at least one link for this to be worth it you know?");
		return 0;
	}

	const db = firebase.firestore();
	//console.log(firebase.firestore.ServerValue);


	//console.log("TRYING TO GET TIME: "+db.ServerValue.TIMESTAMP);

	//var K = db.collection("kitties").push().key;

	/*db.collection("kitties").set({K:{
	  title: ourTitle,
	  links: ourLInks,
	  //wentOnline: firebase.database.ServerValue.TIMESTAMP
	}});*/

	;
	//shortenUrl();

	
	console.log(" USE TEH TIMESTAMP CHECK LINE 79");
	const timestamp = firebase.firestore.FieldValue.serverTimestamp()
	var addDoc = db.collection('kitties').add({
	  title: ourTitle,
	  links: ourLinks,
	  available: true,
	  }).then(ref => {
		//console.log("SUCCESS");
		//redirect

		shortenedLink: shortenUrl("https://linkity.page.link/?link=https://linkity.link/"+link+"&st="+"New%20Title"+"&sd="+"Description"+"&si=https://firebasestorage.googleapis.com/v0/b/linkitylinkalpha.appspot.com/o/lazy.png?alt=media&token=28e55441-4be4-4c23-b403-e88118be4082")
	  window.location = "/"+ref.id;
	});
}

function shortenUrl(Url, callback)
{
	//console.log("Rechecking Url:"+Url);
    var shortUrlAPI = new XMLHttpRequest();
    shortUrlAPI.open("POST", 'https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyASWhDs0u1k_fGx5lqS7zHseM87H9J9E0U', true);
    shortUrlAPI.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    //console.log("Params:");
    //console.log(params);
    shortUrlAPI.onreadystatechange = function() { 
        if (shortUrlAPI.readyState == 4 && shortUrlAPI.status == 200)
            //callback(shortUrlAPI.responseText);
        	//alert(shortUrlAPI.responseText);
        	//console.log(shortUrlAPI.responseText);
        	//console.log(shortUrlAPI.shortLink);
        	return (shortUrlAPI.shortLink);
    }
    shortUrlAPI.send(JSON.stringify({"longDynamicLink":Url}) );


}

function getMeta(link){
	console.log("The link:" + ("https://linkity.page.link/?link=https://linkity.link/"+link+"&st="+"New%20Title"+"&sd="+"Description"+"&si=https://firebasestorage.googleapis.com/v0/b/linkitylinkalpha.appspot.com/o/lazy.png?alt=media&token=28e55441-4be4-4c23-b403-e88118be4082" ) );
	return ("https://linkity.page.link/?link=https://linkity.link/"+link+"&st="+"New%20Title"+"&sd="+"Description"+"&si=https://firebasestorage.googleapis.com/v0/b/linkitylinkalpha.appspot.com/o/lazy.png?alt=media&token=28e55441-4be4-4c23-b403-e88118be4082");
}

function checkIfUrlReachable(url, pos){
	//var myRequest = new Request(url);
	targetId="#linkinput"+(pos);
	//updateRealTimeUrl();
	//url = realTimeUrl;
	//console.log("IS THIS URL: "+url);
	if(url==="") return true;
	try {
	    new URL(url);
	    //console.log("HUZZAH:" +pos);
	  	unMarkErrorRoutine();
	    return true;
	  } catch (err) {
	  	//console.log("FAIL MAN: "+pos)
	  	markErrorRoutine();
	    return false;  
	  }

	//console.log("Attempting");
	/*try{
		aborter.abort();
	}catch(err){
		;
	}*/

	/*if( url.trim().slice(0,4) !== "http"){
		console.log("IGNORE");
		return;
	}

	//fetch(myRequest).then(function(response) {return response.blob();}).catch(function(response){console.log("Fail")}).then(function(response) {console.log("Success");});
	console.log(url);
	fetch(url, {
		method: 'get',abortFetch
		//method: 'get'
	}).then(function(response) {
		console.log("SUCCESS");
		console.log(response);
	}).catch(function(err) {
		console.log("failure");
	});*/

	/*ograph(url,function(err,result){
		console.log("Error: "+err);
		console.log("Result: "+result);
	}); */
}

//Configure Links
function linkConfigs(){
	//localhost config
	//document.getElementById('mainPage').href = currentURL;
}

function uDateMetaData(title,links){
	//Code for changing meta
	//document.querySelector('meta[name="description"]').setAttribute("content",);
	document.title = title;
	//console.log(links.length);
	//document.querySelector('meta[name="og:title"]').setAttribute("content",title);	
	var metaList = document.getElementsByTagName("meta");
	for (var i = 0; i < metaList.length; i++) {
	    if (metaList[i].getAttribute("property") == "og:title") {
	        metaList[i].content = title;
	    }
	    else if(metaList[i].getAttribute("property") == "og:description") {
	        metaList[i].content = (links.length!=1)?(links.length+" links."):(links.length+" link.");
	    }
	    else if(metaList[i].getAttribute("name") == "description") {
	        metaList[i].content = (links.length!=1)?(links.length+" links."):(links.length+" link.");
	    }
	}
}

//NEW FUNCTION:
//CHECK IF TEXT IS NOT EMPTY OR NOT AND THEN CHECK FOR URL BY ADDING/REMOVING ROW
function procede(url,pos){
	//console.log(url+":"+pos);
	
	//Check if erased
	if(url==""){
		//console.log("delet this");
		//REMOVE ROW AND REARRANGE
		
		if( pos!=links ){
			targetId="#linkinput"+pos;
			unMarkErrorRoutine();

			if(links!=linkLimit+1){
				var i=0;
				for(i=pos;i<links;i++){
					//console.log('linkinput'+(i+1));
					newText= document.getElementById('linkinput'+(i+1)).value;
					targetId="#linkinput"+i;
					moveBackRoutine();
				}
				newText=""
				targetId="#link"+(links);
				moveBackRoutine();
				concealRoutine();
				/*targetId="#link"+(links)+"text";
				concealRoutine();*/
			}

			else{
				var i=0;
				for(i=pos;i<linkLimit;i++){
					newText=document.getElementById('linkinput'+(i+1)).value;
					targetId="#linkinput"+i;
					moveBackRoutine();
				}
				newText=""
				targetId="#linkinput"+(linkLimit);
				moveBackRoutine();
			}
			links--;
		}


	}
	//Check if reachable
	else if( checkIfUrlReachable(url,pos) ){
		//ADD NEW ROW IF NECESSARY
		if( links < Math.max(pos+1,links) && links<linkLimit+1 ){
			links=Math.max(pos+1,links);
			targetId="#link"+(pos+1);
			//console.log(targetId);
			revealRoutine();
			/*targetId="#link"+(pos+1)+"text";
			revealRoutine();*/
			//console.log(targetId);

		}
	}

	//console.log("LINK COUNT:"+links);
}

//Jquery
$(function() { 	
    function addNextLink(){ 
       $("#main").append(lazyLinkVariable);
    }  
    addNextLinkFunction = addNextLink;

    function return404(){ 
       $("#main").append("<p><h2>404, Whoospy Daisy! </h2></p>");
    }  
    return404Function = return404;

    function revealElementWithId(){ 
       $(targetId).fadeIn();
    }  
    revealRoutine = revealElementWithId;

    function hideElementWithId(){ 
       $(targetId).fadeOut();
    }  
    concealRoutine = hideElementWithId;

    function markAsErroneous(){ 
       $(targetId).css({"background-color":"red","border-color":"red"});
    }  
    markErrorRoutine = markAsErroneous;

    function unMarkError(){
		$(targetId).css({"background-color":"darkblue","border-color":"darkblue"});
    }
    unMarkErrorRoutine = unMarkError;

    /*function welcome(){
  		$("#main").append('<form action="/action_page.php"<p>Title: <input type="text" name="title"></p><p id="link1">Link 1: <input type="text" ></p><p id="link2"> Link 2: <input type="text" ></p><input type="submit" value="Submit"></form>');
  		$("#main").append("<h3>Welcome to linkitylink. Ever needed to post several links at the same time when you had space for only one?<br>Or perhaps you're the type of person who immensely enjoys mass posting.<br> Either way we're here to help! Give us a few links and we'll give you a link that links to all of them.</h3>");
    }
    welcomeFunction = welcome;*/
    function rewind(){
    	$(targetId).val(newText);
    }
    moveBackRoutine = rewind;

    /*function getRealUrl(){
    	console.log($(targetId).name);
    	realTimeUrl = $(targetId).attr('value');
    	//console.log(realTimeUrl);
    }
    updateRealTimeUrl=getRealUrl;*/
 }); 

$('body').on('keydown', 'input', function(exp) {
	//console.log("BEEP");
    var self = $(this)
      , form = self.parents('form:eq(0)')
      , focusview
      , next
      ;
    if (exp.keyCode == 13) {
        focusview = form.find('input').filter(':visible');
        next = focusview.eq(focusview.index(this)+1);
        if (next.length) {
            next.focus();
        } else {
        	//errors = form.find('input[background-color=red]');
        	//form.find('input[background-color=red]').css({"border-color":"black"});

        	errors = $('input').filter(function() {
        	   //console.log("BACKGROUND COLOR: "+JSON.stringify($(this).css('background-color')));
        	   //console.log( "Checking equality:"+$(this).css('background-color')+" vs. " +$("#redColorChecker").css('background-color'));
			   //return (JSON.stringify($(this).css('background-color')) === "rgb(255, 0, 0)");
			   return($(this).css('background-color')===$("#redColorChecker").css('background-color'));
			});
        	//$('body').find('input[background-color=red]').css();
       		//console.log("ERRORCOUNT:"+moreErrors.length);
       		//console.log("Errors:"+errors);
       		//console.log(errors.toString());
       		//console.log("ERRORS:"+JSON.stringify(errors));
       		/*try{
       			atLeastOneError=errors.first();
       			if(atLeastOneError.length)
       				alert("NOT READY");
       			else
       				alert("READY");
       		}catch(err){
        		alert("READY");
       		}*/
       		if(errors.length){
       			alert("Hey some of those URL's are invalid, see if you can fix the ones marked red!");
       		}
       		else{
       			//alert("YEE HAW");
       			//form.submit();
       			gatherDecentUrls();
       		}
        	
        	
        }
        //return false;
    }
});


$('body').on('paste', 'input', function(){
	//alert("YOU PASTED SOMETHING!");
	var I = $(this);
    var num = I.attr('id').substring(9);
    //var linkText = I.val();
    //var linkText = document.getElementById('linkinput'+num).value;
    //var prev = I.data('val');
    //var current = I.val();
    var e = this;
    setTimeout(function () {
    var linkText = $(e).val();
    //alert(linkText);
    procede(linkText, Number(num) );
    //console.log(linkText);
	}, 0);
	//;
	//console.log( prev +":::"+ current );
	//procede(linkText, Number(num) );
});


//Firebase
$(document).ready(function(){

   /* $("#hide").click(function(){
        $("#link1").fadeOut();
        $("#link2").fadeOut();
    });
    $("#show").click(function(){
        $("#link1").fadeIn();
        $("#link2").fadeIn();
    });*/

    /*$("#linkinput1").on('input',function(e){
    	//$("#link2").fadeOut();
    	alert("PUUPIEs");
    	//alert(document.getElementById('linkinput1').value);
    	//checkIfUrlReachable(document.getElementById('linkinput1').value,1);
    });*/

    $("#main").append(welcomeText);

    for(var i=2;i<=linkLimit;i++){
		$("#link"+i).hide();
    }
    /*$("#link2").hide();$("#link3").hide();$("#link4").hide();
    $("#link5").hide();$("#link6").hide();$("#link7").hide();
    $("#link8").hide();$("#link9").hide();$("#link10").hide();
    $("#link11").hide();$("#link12").hide();*/

    /*$("#link2text").hide();$("#link3text").hide();$("#link4text").hide();
    $("#link5text").hide();$("#link6text").hide();$("#link7text").hide();
    $("#link8text").hide();$("#link9text").hide();$("#link10text").hide();*/
    //set color checkers
    $('#redColorChecker').css('background-color','red');

    $('#submissionButton').click(function(){
    	errors = $('input').filter(function() {
			   return($(this).css('background-color')===$("#redColorChecker").css('background-color'));
		});
   
   		if(errors.length){
   			alert("Hey some of those URL's are invalid, see if you can fix the ones marked red!");

   		}
   		else{
   			//form.submit();
   			//alert("COOL EVENT");
   			$(this).prop('disabled', true);
   			gatherDecentUrls();
   		}
    });



});

//Firebase
document.addEventListener("DOMContentLoaded", event=>{

	const app = firebase.app();

	const db = firebase.firestore();

	const id = location.pathname.substring(1);

	//linkConfigs();
	
	if(id!==""){
		console.log("Checking ID:"+id);
	const currentKitty = db.collection("kitties").doc(id);
	//currentKitty.where("available", "==", true).get().then(doc=>{
		/*console.log("start");
	console.log(currentKitty);console.log("end");*/

	//console.log(currentKitty.get());console.log("end");
	currentKitty.get().then(doc=>{
		if (doc.exists) {
		//document.write('<style>body {background: linear-gradient(peachpuff, lightblue);} </style>');
		const links = doc.data().links;
		const title = doc.data().title;
		//console.log("Title: "+title);
		//uDateMetaData(title, links);
		

		lazyLinkVariable="<h1>"+title+"</h1><br>";
		addNextLinkFunction();

		console.log("NOTE TO SELF: MAKE SURE THIS IS BOOTSTRAP 4!");
		for (var i=0; i<links.length; i++){
			//document.write( "<a href="+links[i].link+">"++"</a><br>");
			//document.write( "<iframe src="+links[i].link+' name="targetframe" allowTransparency="true" scrolling="no" frameborder="0" >Looks like your browser doesn\'t support previews  ¯\\_(ツ)_/¯</iframe><br>');
			//console.log()
			lazyLinkVariable="<p><div class='main'><a href="+links[i].link+"><h3>"+links[i].link+"</h3></a></div></p><iframe class=\"embed-responsive-item\" src=\""+links[i].link+"\"></iframe>";
			addNextLinkFunction();
			//console.log("BOI");
			//document.write( "<p><div><a href="+links[i].link+"><h3>"+links[i].link+"</h3></a></div></p>");
		}
		
		//href='whatsapp://send?text="http://https://linkitylinkalpha.firebaseapp.com"'
		console.log("attempting to shorten");
		console.log(getMeta(id));
		
		//UPDATE SHARING

		console.log("DONT SET IT HERE GO BACK TO TEH FUNCTION!");
		document.getElementById("WhatsappShare").href='whatsapp://send?text=https://linkity.page.link/'+shortenUrl(getMeta(id));
		
	} else{
		return404Function();
	}
	}).catch(doc=>{
		//document.write('<style>body {background: lightblue;} </style>');
		//document.write( "<p><h2>404, Whoospy Daisy! </h2></p>");
		//lazyLinkVariable="<p><div class='main'><a href="+links[i].link+"><h3>"+links[i].link+"</h3></a></div></p>";
		return404Function();
	});

	}
	else{
		//welcomeFunction();
		welcomeText="<form><ul class=\"list-group\">";
		welcomeText+="<div class=\"col-xs-12 col-sm-9\"><div class=\"input-group\">\
	    	<span class=\"input-group-addon\">Title:</span>\
	    	<input id=\"title\" type=\"text\" class=\"form-control input-lg\" name=\"Title\" placeholder=\"Title\">\
	    	</input></div></div>";
		for(var i=1;i<=linkLimit;i++){
			welcomeText+="<div class=\"col-xs-12 col-sm-4\"><div id='link"+i+"'class=\"input-group\" style=\"padding-top: 20px;\
    padding-right: 30px;\
    padding-bottom: 20px;\">\
    	<span  class=\"input-group-addon\">Link "+i+":</span>\
    	<input id=\"linkinput"+i+"\" type=\"text\" class=\"form-control input-lg\" name=\"Link "+i+"\" placeholder=\"Link\" onkeyup='procede(this.value,"+i+");'>\
    	</input></div></div>";
		}
		welcomeText+="</form><div class=\"col-xs-12\"><button type=\"button\" id=\"submissionButton\" class=\"btn btn-primary\"> Submit! <!--Ansem, err I mean Xehanort would be proud wouldn't he?--> </button> \
		</div>\
		<p id=\"redColorChecker\" style=\"display:none;\"></p>\
		<div class=\"jumbotron text-center\" style='background-color:lightblue;padding-top: 300px;'>\
      		<h4 style=\"font-family: Big Caslon, Serif\">Welcome to Linkity Link. Ever needed to post several links at the same time when you had space for only one?<br>\
			Or perhaps you're the type of person who immensely enjoys mass posting.<br>\
			Either way we're here to help! Give us a few links and we'll give you a link that links to all of them.<br>\
    	</div>";
		/*welcomeText="\
		<form><ul class=\"list-group\">\
		<div class=\"input-group\">\
    	<span class=\"input-group-addon\">Title:</span>\
    	<input id=\"title\" type=\"text\" class=\"form-control\" name=\"Title\" placeholder=\"Title\">\
    	</input></div>\
    	<div id='link1'class=\"input-group\">\
    	<span  class=\"input-group-addon\">Link 1:</span>\
    	<input id=\"linkinput1\" type=\"text\" class=\"form-control\" name=\"Link 1\" placeholder=\"Link\" onkeyup='procede(this.value,1);'>\
    	</input></div>\
    	<div id='link2'  class=\"input-group\" >\
    	<span class=\"input-group-addon\">Link 2:</span>\
    	<input id=\"linkinput2\" type=\"text\" class=\"form-control\" name=\"Link 2\" placeholder=\"Link\" onkeyup='procede(this.value,2);'>\
    	</input></div>\
    	<div id='link3'  class=\"input-group\" >\
    	<span class=\"input-group-addon\">Link 3:</span>\
    	<input id=\"linkinput3\" type=\"text\" class=\"form-control\" name=\"Link 3\" placeholder=\"Link\" onkeyup='procede(this.value,3);'>\
    	</input></div>\
    	<div id='link4'  class=\"input-group\" >\
    	<span class=\"input-group-addon\">Link 4:</span>\
    	<input id=\"linkinput4\" type=\"text\" class=\"form-control\" name=\"Link 4\" placeholder=\"Link\" onkeyup='procede(this.value,4);'>\
    	</input></div>\
    	<div id='link5'  class=\"input-group\" >\
    	<span class=\"input-group-addon\">Link 5:</span>\
    	<input id=\"linkinput5\" type=\"text\" class=\"form-control\" name=\"Link 5\" placeholder=\"Link\" onkeyup='procede(this.value,5);'>\
    	</input></div>\
    	<div id='link6'  class=\"input-group\" >\
    	<span class=\"input-group-addon\">Link 6:</span>\
    	<input id=\"linkinput6\" type=\"text\" class=\"form-control\" name=\"Link 6\" placeholder=\"Link\" onkeyup='procede(this.value,6);'>\
    	</input></div>\
    	<div id='link7'  class=\"input-group\" >\
    	<span class=\"input-group-addon\">Link 7:</span>\
    	<input id=\"linkinput7\" type=\"text\" class=\"form-control\" name=\"Link 7\" placeholder=\"Link\" onkeyup='procede(this.value,7);'>\
    	</input></div>\
    	<div id='link8'  class=\"input-group\" >\
    	<span class=\"input-group-addon\">Link 8:</span>\
    	<input id=\"linkinput8\" type=\"text\" class=\"form-control\" name=\"Link 8\" placeholder=\"Link\" onkeyup='procede(this.value,8);'>\
    	</input></div>\
    	<div id='link9'  class=\"input-group\" >\
    	<span class=\"input-group-addon\">Link 9:</span>\
    	<input id=\"linkinput9\" type=\"text\" class=\"form-control\" name=\"Link 9\" placeholder=\"Link\" onkeyup='procede(this.value,9);'>\
    	</input></div>\
    	<div id='link10'  class=\"input-group\" >\
    	<span class=\"input-group-addon\">Link 10:</span>\
    	<input id=\"linkinput10\" type=\"text\" class=\"form-control\" name=\"Link 10\" placeholder=\"Link\" onkeyup='procede(this.value,10);'>\
    	</input></div>\
    	<div id='link11'  class=\"input-group\" >\
    	<span class=\"input-group-addon\">Link 11:</span>\
    	<input id=\"linkinput11\" type=\"text\" class=\"form-control\" name=\"Link 11\" placeholder=\"Link\" onkeyup='procede(this.value,11);'>\
    	</input></div>\
    	<div id='link12'  class=\"input-group\" >\
    	<span class=\"input-group-addon\">Link 12:</span>\
    	<input id=\"linkinput12\" type=\"text\" class=\"form-control\" name=\"Link 12\" placeholder=\"Link\" onkeyup='procede(this.value,12);'>\
    	</input></div>\
		</form><button id=\"submissionButton\"> Submit! <!--Ansem, err I mean Xehanort would be proud wouldn't he?--> </button> \
		<p id=\"redColorChecker\" style=\"{display:none;}\"></p>\
		<div class=\"jumbotron text-center\" style=background-color:lightblue>\
      		<h4>Welcome to linkitylink. Ever needed to post several links at the same time when you had space for only one?<br>\
			Or perhaps you're the type of person who immensely enjoys mass posting.<br>\
			Either way we're here to help! Give us a few links and we'll give you a link that links to all of them.<br>\
			Because we're currently in phase alpha, we're limiting these to 10 links for now,<br>\
			though you could link your own links to each other if you'd like to cheat it.</h4>\
    	</div>\
		";
		//document.write("<h3>Welcome to linkitylink. Ever needed to post several links at the same time when you had space for only one?<br>Or perhaps you're the type of person who immensely enjoys mass posting.<br> Either way we're here to help! Give us a few links and we'll give you a link that links to all of them.</h3>");
		//Have a title
		//Have a limit of 20 links
		/*document.write('<form action="/action_page.php">\
  <p>Title: <input type="text" name="title"></p>\
  <p id="link1">Link 1: <input type="text" ></p>\
  <p id="link2"> Link 2: <input type="text" ></p>\
  <input type="submit" value="Submit"></form>');*/


	}
	

	//document.write("We're cool");

	//document.write();
	/*document.write('<button id="hide">Hide</button>\
<button id="show">Show</button></body>');*/

	//document.close();
});

function gotUserData(snapshot){
  snapshot.forEach(userSnapshot => {});
}


