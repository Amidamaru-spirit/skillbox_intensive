$(function(){
	$('.order-call').on('click', function(){
		$('.popup-container').css('display', 'flex');
	});

	$('.close').on('click', function(){
		$('.popup-container').css('display', 'none');
	});

	$('.send').on('click', function(){
		let request = {
			'name': $('#name').val(),
			'email': $('#email').val()
		};
		$.post('/api.php', request, function(response){
			if(response == '1') {
				$('#name').val(''),
				$('#email').val(''),
				$('.popup-container').css('display', 'none');
			}
		})
	});
});