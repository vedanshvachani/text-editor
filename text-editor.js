
function change_size(size){


	var textarea = document.getElementById("textarea");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;

	var sel = textarea.value.substring(start, end);
	console.log(sel);
	var replace = '<font size='+'"'+size+'">' + sel + '</font>';
	console.log(replace);
	textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len); 
}
function change_color(color){
	var textarea = document.getElementById("textarea");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;

	var sel = textarea.value.substring(start, end);

	var replace = '<font color='+'"'+color+'">' + sel + '</font>';

	textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);	
}
	
function textFormat(tag){
	
	var textarea = document.getElementById("textarea");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;

	var sel = textarea.value.substring(start, end);
	console.log(sel);
	var replace = '<'+tag+'>' + sel + '</'+tag+'>';
	console.log(replace);
	textarea.value =  textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);	
}
function align(tag){
	var textarea = document.getElementById("textarea");
	var len = textarea.value.length;
	var start = textarea.selectionStart;
	var end = textarea.selectionEnd;

	var sel = textarea.value.substring(start, end);
	console.log(sel);
	var replace = '<p align='+"'"+tag+"'"+'>' + sel +'</p>';
	console.log(replace);
	textarea.value =  textarea.value.substring(0,start) +replace+ textarea.value.substring(end,len);	
	
}
function submit(){
	var result = document.getElementById("textarea").value
	document.write(result);
}
