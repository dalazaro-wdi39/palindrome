console.log("sanity check");

function isPalindrome(word){

  //lowercase the word
  let wordLowercase = word.toLowerCase();

  //split the word into letters, reverse the letters, and join them
  let flipWord = wordLowercase.split('').reverse().join('');

  if (wordLowercase === flipWord){
    return true;
  } else {
    return false;
  }

};

$(document).ready(function(){

	$('.form-inline').on('submit', function(event){
		event.preventDefault();
		var input = $('.pal-input').val();
		var isPalin = isPalindrome(input);
		if (isPalin === true){
			$('.message').append(`<h2>${input}</h2><p>is a palindrome!</p>`);
		} else {
      $('.message').append(`<h2>${input}</h2><p>is <strong>NOT</strong> a palindrome!</p>`);
    }
	});

});
