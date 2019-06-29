
$(document).ready(function() {
	let md_textarea = document.getElementById("md-textarea");
	let md_render = document.getElementById("markdown-render");
	let buttonparse = document.getElementById("button-parse");
	let buttonclear = document.getElementById("button-clear");
	buttonparse.addEventListener("click", function() {
	    $.ajax({
		    type: 'get',
		    url: '/compile',
		    data: {document_json: md_textarea.value},
		    success: function (data) {
		    	md_render.innerHTML = '';
				md_render.appendChild(renderjson(data));
		    }
		});
	});
	buttonclear.addEventListener("click", function() {
		$(md_render).text("");
		md_textarea.value = "";
	});
});