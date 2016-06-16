$('.number').on('click', function(){
	value = this.getAttribute('value');
	$('#display').append(value);
});

$(".calc").on( "click", function() {
		
	value = this.getAttribute('value');
	var text = $('#display').text();
	if (text.slice(-1) == '+'){
		return;
	}
	if (text.slice(-1) == '-'){
		return;
	}
	if (text.slice(-1) == '/'){
		return;
	}
	if (text.slice(-1) == '*'){
		return;
	}
	$('#display').append(value);
});


$('#clear').on('click', function(){
	$('#display').text('');
});
$('#answer').on('click', function(){
	var text = $('#display').text();
	var result=eval(text);
	if (text.slice(-2) == '/0'){
		result=' ';
		alert('Еrror: zero is not divisible!');
	}
	
	$('#display').text(result);
	});	
