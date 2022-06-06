const quotes = [
    {
        quote:" You still have enough time to make your dreams come true.",
    },
    {
        quote:"Fear cannot be without hope nor hope without fear.",
    },
    {
        quote:"Life is a journey to be experienced, not a problem to be solved.",
    },
    {
        quote:"Enjoy your life",

    },
    {
        quote:"Better Late Than Never.",
    },
    {
        quote:"Well begun is half done.",
    },
    {
        quote:"Slow and steady wins the game.",
    },
    {
        quote:"Look before you leap.",
    },
    {
        quote:"What's done is done.",
    },
    {
        quote:"Knowledge is power.",
    },
    {
        quote:"I never lose. I either win or learn.",
    },

];
const quote = document.querySelector("#quote span");
const todayQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todayQuote.quote;