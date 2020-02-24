$(document).ready(function() {

	$(".reviews.sect .item .text .photos .photo, .recommended.sect .item .icon, .videoreviews.sect .content > .top > .left > .bottom .items .item .icon").fancybox();
	$(".modalbox").fancybox({
		closeBtn:true,
		scrolling:'visible',
		fitToView: false,
		padding: 0,
		margin: [0,40,0,0],
	});
	$("form input[name='phone']").inputmask("+380 (99) 999-99-99");
	$("form").on("submit", function(){
		var form = $(this);
		var error = false;
		if (form.find("input[name='name']").length>0) {
			var nameval = form.find("input[name='name']").val();
			var namelen = nameval.length;
			if(namelen < 1) {
				form.find("input[name='name']").addClass('error');
				error = true;
			}
			else if(namelen >= 1){
				form.find("input[name='name']").removeClass('error');
			}
		}
		if (form.find("input[name='phone']").length>0) {
			var tph = form.find("input[name='phone']").val();
			tph = !tph.match(/^\+380 \([0-9]{2}\) [0-9]{3}-[0-9]{2}\-[0-9]{2}/);
			if(tph == true) {
				form.find("input[name='phone']").addClass("error");
				error = true;
			}
			else if(tph == false){
				form.find("input[name='phone']").removeClass("error");
			}
		}
		if (form.find("textarea[name='address']").length>0) {
			var addressval = form.find("textarea[name='address']").val();
			var addresslen = addressval.length;
			if(addresslen < 1) {
				form.find("textarea[name='address']").addClass('error');
				error = true;
			}
			else if(addresslen >= 1){
				form.find("textarea[name='address']").removeClass('error');
			}
		}
		if (form.find("input[name='link']").length>0) {
			var linkval = form.find("input[name='link']").val();
			var linklen = linkval.length;
			if(linklen < 1) {
				form.find("input[name='link']").addClass('error');
				error = true;
			}
			else if(linklen >= 1){
				form.find("input[name='link']").removeClass('error');
			}
		}
		if (form.find("textarea[name='message']").length>0) {
			var messageval = form.find("textarea[name='message']").val();
			var messagelen = messageval.length;
			if(messagelen < 1) {
				form.find("textarea[name='message']").addClass('error');
				error = true;
			}
			else if(messagelen >= 1){
				form.find("textarea[name='message']").removeClass('error');
			}
		}
		if(error == false) {
			return true;
		}
		return false;
	});
	function validateEmail(email) { 
		var reg = /[0-9a-z_]+@[0-9a-z_^.]+.[a-z]{2,3}/i;
		return reg.test(email);
	}
	$(".popup_subscription form").on("submit", function(){
		var emailval  = $(this).find("input[name='email']").val();
		var mailvalid = validateEmail(emailval);
		if(mailvalid == false) {
			$(this).find("input[name='email']").addClass('error');
			return false;
		}
		else if(mailvalid == true){
			$(this).find("input[name='email']").removeClass('error');
		}
		$.ajax({
			type: 'POST',
			url: '/subscription.php',
			data: $(this).serialize(),
			success: function(data) {
				setTimeout("$('form').trigger('reset')", 0);
				$.fancybox([{ 
					href : '#popup_subscription_thanks',
					closeBtn:true,
					scrolling:'visible',
					fitToView: false,
					padding: 0,
					margin: [0,40,0,0],
					modal: true
				}]);
			}
		});
		return false
	});
});
(jQuery)