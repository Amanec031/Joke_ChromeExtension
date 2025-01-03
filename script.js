const jokeElement = document.getElementById('jokeElement');
const newJokeButton = document.getElementById('newJokeButton');
const loader = document.getElementById('loader');

 function fetchJoke() {
    showLoader();
    fetch('https://icanhazdadjoke.com/slack')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }
            return response.json();
        })
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            jokeElement.textContent = jokeText;
            hideLoader();
        })
        .catch(error => {
            jokeElement.textContent = "Oops! Couldn't fetch a joke. Try again later.";
            console.error(error);
            hideLoader();
        });
}

 function showLoader() {
    loader.classList.remove('hidden');
    jokeElement.textContent = '';
}

 function hideLoader() {
    loader.classList.add('hidden');
}

 newJokeButton.addEventListener('click', fetchJoke);

 fetchJoke();
