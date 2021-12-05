let masalalar = [
	{
		task: `   Berilgan gapning palindrom yoki palindrom gap emasligini aniqlaydigan isPalindrome funksiyasini yozing. Palindromlikni aniqlashda faqat harflar e'tiborga olinadi. Bo'sh joy, tinish belgilari inobatga olinmaydi!`, 

		imgSrc: './img/1-masala.png',

		checkValue: ["Go hang a salami, I'm a lasagna hog!",
					"This phrase, surely, is not a palindrome!",
					"Eva, can I see bees in a cave?"], 

		value: [true, false, true], 

		argument: ['sentence'], 

		returns: '\n return isPalindrome(sentence)'
	},

	{
		task: `   sum() degan funksiya yasang. Bu funksiyaga parametr sifatida array kiritiladi. Bu funksiyaning vazifasi array ichidagi har bir string ichidagi sonlarni qo'shib qaytarish!
			Eslatma: manfiy sonlar ham inobatga olinsin!`, 

		imgSrc: './img/2-masala.png',

		checkValue: [[], ["1", "five", "2wenty", "thr33"], [["1X2", "t3n"],["1024", "5", "64"]],
					[[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]], 

		value: [0, 36, 1099, 759], 

		argument: ['array'], 

		returns: '\n return sum(array)'
	},

	{
		task: `   findLongest() degan funksiya yasang. Ushbu funksiya argument sifatida o'ziga bitta string qabul qiladi. Ushbu funksiyaning vazifasi string ichidan eng uzun so'zni kichik harflarda qaytarishdir.
		Eslatma: agar eng uzun so'z bir nechta bo'ladigan bo'lsa eng birinchi uchraganini qaytarsin! So'z tarkibidagi raqamlar va tinish belgilar inobatga olinmasin!`, 

		imgSrc: './img/3-masala.png',

		checkValue: ["I will and ever will be gratefully and perpetually loving you Tesh!😘", "A thing of beauty is a joy forever.", "Forgetfulness is by all means powerless!", "The word strengths is the longest and most commonly used word with a single vowel."], 

		value: ["perpetually", "forever", "forgetfulness", "strengths"], 

		argument: ["str"], 

		returns: '\n return findLongest(str)'
	},

]
