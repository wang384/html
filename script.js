$(function(){
	var score = 0;
	var correct = 0;
	$('#submit').click(function(){
		$('#score').text(score + ', ' + correct + ' answers are correct!');
		$('#scoreframe').show();
	});
	
	
	var answer = [];
	answer['first'] = 'A';
	answer['second'] = 'A';
	answer['third'] = 'A';
	answer['fourth'] = 'B';
	answer['fifth'] = 'A';
	
	$('.q').click(function(){
		var index = $(this).attr('name');
		if ($(this).val() == answer[index]) {
			score += 20;
			correct++;
			$(this).siblings('.wrong').text('you are right!').css({'color':'green'});
		} else {
			$(this).siblings('.wrong').text('you are wrong!');
		}
		$('input[name='+index+']').attr({'disabled':'disabled'});
	});
})