const text_el = document.querySelector("#text");
const author_el = document.querySelector("#author");

const colors = [
	"#16a085",
	"#27ae60",
	"#2c3e50",
	"#f39c12",
	"#e74c3c",
	"#9b59b6",
	"#FB6964",
	"#342224",
	"#472E32",
	"#BDBB99",
	"#77B1A9",
	"#73A857",
];
let currentColorIndex = "Default";

const quotes = [];
let currentQuoteAndAuthor = null;

const quotesUrl =
	"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

async function getQuotes(url) {
	try {
		const quotesResponse = await fetch(url);
		const data = await quotesResponse.json();
		quotes.push(...data["quotes"]);
	} catch (err) {
		console.log(err);
	}
}

function getNewQuoteAuthorAndColor() {
	const newQuoteAndAuthor = getNewQuoteAndAuthor();
	const newColorIndex = getNewColorIndex();

	console.log(newQuoteAndAuthor, colors[newColorIndex]);

	updateQuoteAuthorAndColor(newQuoteAndAuthor, newColorIndex);

	setCurrentQuoteAuthorAndColor(newQuoteAndAuthor, newColorIndex);
	setSocialMediasLinks();
}

function getNewQuoteAndAuthor() {
	let newQuoteAndAuthor = null;

	do {
		const newQuoteAndAuthorIndex = getRandomNumber(0, quotes.length - 1);
		newQuoteAndAuthor = quotes[newQuoteAndAuthorIndex];
	} while (newQuoteAndAuthor === currentQuoteAndAuthor);

	if (newQuoteAndAuthor["author"][0] != "–") {
		newQuoteAndAuthor["author"] = newQuoteAndAuthor["author"].substring(
			1,
			newQuoteAndAuthor["author"].length
		);
	}

	return newQuoteAndAuthor;
}

function getNewColorIndex() {
	let newColorIndex = null;
	do {
		newColorIndex = getRandomNumber(0, colors.length - 1);
	} while (newColorIndex === currentColorIndex);
	return newColorIndex;
}

function updateQuoteAuthorAndColor(quoteAndAuthor, colorIndex) {
	$("#quote-text *, #author").animate(
		{
			color: "white",
		},
		600,
		"linear"
	);

	setTimeout(() => {
		$("#text").html(
			`<span id="quotation-marks" class="fa fa-quote-left"></span>${quoteAndAuthor["quote"]}`
		);
		$("#author").text(`– ${quoteAndAuthor["author"]}`);
	}, 600);

	$("body, #tweet-quote, #tumblr-quote, #new-quote").removeClass(
		`color${currentColorIndex}`
	);
	$("body, #tweet-quote, #tumblr-quote, #new-quote").addClass(
		`color${colorIndex}`
	);

	$("#quote-text *, #author").animate(
		{
			color: colors[colorIndex],
		},
		700,
		"linear"
	);
}

function setCurrentQuoteAuthorAndColor(quoteAndAuthor, colorIndex) {
	currentQuoteAndAuthor = quoteAndAuthor;
	currentColorIndex = colorIndex;
}

function setSocialMediasLinks() {
	const twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&text="${encodeURIComponent(
		currentQuoteAndAuthor["quote"]
	)}" – ${encodeURIComponent(currentQuoteAndAuthor["author"])}`;

	const tumblrLink = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(
		currentQuoteAndAuthor["author"]
	)}&content=${encodeURIComponent(
		currentQuoteAndAuthor["quote"]
	)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

	$("#tweet-quote").attr("href", twitterLink);
	$("#tumblr-quote").attr("href", tumblrLink);
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).ready(async function () {
	await getQuotes(quotesUrl);
	$("body").addClass("colorDefault");
	getNewQuoteAuthorAndColor();
});
