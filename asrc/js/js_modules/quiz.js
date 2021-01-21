var ua = navigator.userAgent,
	evens = (ua.match(/iPad/i)) ? "touchstart" : "click";

var number = 0;
var maxNumber = $(".quiz__page").length - 1;
var $element = $(".quiz__page").find("input, select, textarea");
var btnNext = $('.quiz__next');
var testTextNum = maxNumber;
var testText = $('.quiz__gift-count');
var $elementRadio = $(".quiz__page").not('.final, .no-focus').find("input[type='radio'], input[type='checkbox'] ");
var isValid;
var dataBlock;
var activeSlede = [];

var btnPrev = $('.quiz__prev');








for (var i = 0; i < maxNumber; i++) {
	activeSlede[i] = false;
}

$element.on('change input', function (e) {
	var value = $(this).val().trim();
	isValid = value !== "";
	btnActive(!isValid);
	$(".text-subbtn").hide();
});

function btnActive(isValid) {
	if (number === 0) {
		// btnPrev.prop('disabled', 'false');
		btnNext.prop('disabled', isValid);
	} else {
		// btnPrev.prop('disabled', false);
		if (activeSlede[number] === true || isValid === false) {
			btnNext.prop('disabled', false);
		} else {
			btnNext.prop('disabled', true);
		}

	}

}

// sidebar
var $barLevel = Math.floor(100 / (maxNumber));
var $barWidth = $barLevel;

function progress(num) {
	var testBlock = ".quiz__block-" + num;
	var testCircle = ".quiz__circle-" + (num + 1);
	$(testBlock).addClass('quiz__block_active');
	$(testCircle).addClass('quiz__circle_active');
	$(".quiz__progress-bar").text($barWidth + '%');
}
progress(0);

function progress_prev(num) {
	var testBlock_prev = ".quiz__block-" + num;
	var testCircle_prev = ".quiz__circle-" + (num + 1);
	jQuery(testBlock_prev).removeClass('quiz__block_active');
	jQuery(testCircle_prev).removeClass('quiz__circle_active');
	jQuery(".quiz__progress-bar").text($barWidth + '%');
}


var otv = [];
// btn

function btnClick() {

	btnNext.bind(evens, next);
	btnPrev.bind(evens, prev);
	$elementRadio.on('input, change', next);
	// $('.quiz__input_txt').on('input, change',next);
}
btnClick();
function next() {
	event.preventDefault();
	activeSlede[number] = true;

	++number;

	setTimeout(function () {
		$(".quiz__page").hide();
		$(".quiz__page").eq(number).fadeIn(1000);
	}, 300);
	$(".quiz__next").hide();
	$(".quiz__next").eq(number).show();
	$(".quiz__prev").hide();
	$(".quiz__prev").eq(number).show();

	btnActive(!isValid);
	if (activeSlede[number] === true) {
		btnNext.prop('disabled', false);
	} else {
		btnNext.prop('disabled', true);
	}

	$barWidth += $barLevel;
	if (number < maxNumber - 1) {
		$(".right__text-cont-item").hide();
		$(".right__text-cont-item").eq(number).fadeIn(1000);
	} else if (number > maxNumber - 1) {
		$barWidth = 100;
	}



	// if(number === 6){
	//   $('.test__righ-t1').hide();
	//   $('.test__righ-t2').fadeIn();
	// }
	if (number === maxNumber) {
		$('.quiz__gift-count, .quiz__gift-title').hide();
		$('.quiz__gift-title-final, .quiz__gift-count-final').fadeIn();
		$('.quiz__for_mocup').addClass('active');
		// $('.present-img-item').attr({
		//   "src": $('.gift-box-item_new img').attr('src'),
		// });

		for (var i = 0; i < maxNumber; i++) {
			var val = '';
			$(".quiz__page").eq(i).find('input').each(function (index, el) {
				if ($(this).prop('checked')) {
					val = val + $(this).val() + ' ,';
				}
			});
			otv[i] = val;
		}

		for (var i = 0; i < maxNumber; i++) {
			var str = otv[i].substring(0, otv[i].length - 1);
			$('.text-final-ul').append('<p class="text-small text-final-li">'
				+ str + '</p>');
		}
		$('.test__btn-block').hide();
	}
	if (testTextNum != 1) {
		testTextNum -= 1;
		if (testTextNum < 5 && testTextNum > 1) {
			testText.text(testTextNum + ' вопросa');
		} else if (testTextNum < 2) {
			testText.text(testTextNum + ' вопрос');
		} else {
			testText.text(testTextNum + ' вопросов');
		}
	}
	setTimeout(function () {
		$(".test-item__number-furst").text(number + 1);
		// $barWidth += $barLevel;
		progress(number);

		//   animateTop ();
	}, 300);
	// }
}

function prev() {
	event.preventDefault();
	activeSlede[number] = true;

	--number;

	setTimeout(function () {
		$(".quiz__page").hide();
		$(".quiz__page").eq(number).fadeIn(1000);
	}, 300);
	$(".quiz__next").hide();
	$(".quiz__next").eq(number).show();
	$(".quiz__prev").hide();
	$(".quiz__prev").eq(number).show();
	//   $("#not_vis").hide();

	btnActive(!isValid);
	if (activeSlede[number] === true) {
		btnNext.prop('disabled', false);
	} else {
		btnNext.prop('disabled', true);
	}

	$barWidth -= $barLevel;
	if (number < maxNumber - 1) {
		$(".right__text-cont-item").hide();
		$(".right__text-cont-item").eq(number).fadeIn(1000);
	} else if (number > maxNumber - 1) {
		$barWidth = 100;
	}

	if (number === 6) {
		$('.test__righ-t1').hide();
		$('.test__righ-t2').fadeIn();
	}
	if (number === 7) {
		$('.test__righ-t2').hide();
		$('.test__righ-t3').fadeIn();
		$('.present-img-item').attr({
			"src": $('.gift-box-item_new img').attr('src'),
		});

		for (var i = 0; i < maxNumber; i++) {
			var val = '';
			$(".quiz__page").eq(i).find('input').each(function (index, el) {
				if ($(this).prop('checked')) {
					val = val + $(this).val() + ' ,';
				}
			});
			otv[i] = val;
		}

		for (var i = 0; i < maxNumber; i++) {
			var str = otv[i].substring(0, otv[i].length - 1);
			$('.text-final-ul').append('<p class="text-small text-final-li">'
				+ str + '</p>');
		}
		$('.test__btn-block').hide();
		// console.log(otv);
	}
	// if(number === maxNumber - 1){
	//      $(".test__btn-block").hide();
	//      setTimeout(function(){
	//        $(".quiz__page").hide();
	//        $(".quiz__page").eq(number + 1).fadeIn(1000);
	//        $(".test-item__number-furst").text(number + 1);
	//        $barWidth += $barLevel;
	//        progress(number);

	//        animateTop ();
	//      },2700);
	// }else{
	if (testTextNum != 0) {
		testTextNum += 1;
		if (testTextNum < 5 && testTextNum > 1) {
			testText.text(testTextNum + ' вопросa');
		} else if (testTextNum < 2) {
			testText.text(testTextNum + ' вопрос');
		} else {
			testText.text(testTextNum + ' вопросов');
		}
	}
	setTimeout(function () {
		$(".test-item__number-furst").text(number + 1);
		// $barWidth += $barLevel;
		progress_prev(number + 1);

		//   animateTop ();
	}, 300);
	// }
}
var inpTrue = false;
$('.gift').find('input').on('change input', function () {

	// $('.test__righ-t1').hide();
	// $('.test__righ-t2').fadeIn();
	$('.gift-box-item img').attr({
		"src": $(this).parents('.item-wq-6').find('.iw6i').attr('src'),
	});
	$('.text-prs').text($(this).parents('.item-wq-6').find('.text-small-test').text().trim());
	$('.title-presents-6').text($(this).val());
	$('.present-img').css({ display: 'none' });
	$('.gift-title').css({
		marginTop: '-2vw'
	})
	$('.gift-box').css({
		marginTop: '18vw'
	})

});

// $('.qw3-no-inp').on('change input', function() {
//   $('.test-qw3-inpt').hide();
//   $('.test-qw3-inpt').find('input').val('');
//   inpTrue = false;
// });


function animateTop() {
	var elem = $('.form-test');
	var top = elem.offset().top - 15;
	$('body,html').animate({ scrollTop: top }, 400);
}


$('.popup__form, .finished_project_section--form').submit(function () {
	$.ajax({
		type: "POST",
		url: "http://minigun-agency.by/wp-content/themes/minigun/assets/mail.php",
		data: $(this).serialize(),
	}).done(function () {
		$('.js-overlay-thanks').fadeIn();
		$('.popup__overlay-form').fadeOut();
		$('.popup__form, .finished_project_section--form').trigger('reset');
		gtag('event', 'submit', { 'event_category': 'form', 'event_label': 'popup__form' });
		ym(62814052, 'reachGoal', 'popup__form'); return true;
		// $('.quiz__page-final').hide();
		// $('.quiz__page-first, .quiz__prev-first, .quiz__next-first').fadeIn();
	});
	return false;
});

$('.quiz__form').submit(function () {
	$.ajax({
		type: "POST",
		url: "http://minigun-agency.by/wp-content/themes/minigun/assets/mail.php",
		data: $(this).serialize()
	}).done(function () {
		$('.quiz__thanks').fadeIn();
		$('.quiz__page-final, .quiz__proc, .quiz__visual').fadeOut();
		$('.quiz__for_mocup').removeClass('active');
		gtag('event', 'submit', { 'event_category': 'quiz', 'event_label': 'quiz__form' });
		ym(62814052, 'reachGoal', 'quiz__form'); return true;
		// $('.quiz__form').trigger('reset');
		// $('.quiz__page-final').hide();
		// $('.quiz__page-first, .quiz__prev-first, .quiz__next-first').fadeIn();
	});
	return false;
});
