let page = 1;
const limit = 20; // Number of items to load per page
let loading = false;

function fetchData() {
    if (!loading) {
        loading = true;

        const publicKey = "f5aee4dba058cdc4f77ae1aaa088acb6"; // Replace with your Marvel public key
        const privateKey = "ea9362c8e5f9b6562d8be53a567e32e2ca6c634f"; // Replace with your Marvel private key
        const timestamp = new Date().getTime().toString();
        const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
        const baseUrl = 'https://gateway.marvel.com/v1/public/characters';

        const galleryElement = document.getElementById('marvel-gallery');
        const loadingIndicator = document.getElementById('loading-indicator');

        loadingIndicator.style.display = 'block';

        fetch(`${baseUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${(page - 1) * limit}`)
            .then(response => response.json())
            .then(data => {
                const characters = data.data.results;
                characters.forEach(character => {
                    const imageUrl = `${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`;
                    const name = character.name;
                    const description = character.description ? character.description : 'Description not available';
                    const card = `
                        <div class="card">
                            <img src="${imageUrl}" alt="${name}">
                            <div class="card-details">
                                <h3>${name}</h3>
                                <p>${description}</p>
                            </div>
                        </div>`;
                    galleryElement.innerHTML += card;
                });

                page++; // Increment page for next request
                loading = false;
                loadingIndicator.style.display = 'none';
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                loading = false;
                loadingIndicator.style.display = 'none';
            });
    }
}

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        fetchData();
    }
});

fetchData(); // Initial load of content
