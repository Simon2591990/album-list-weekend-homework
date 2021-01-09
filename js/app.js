document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript Loaded');

    const theForm = document.querySelector('#new-album-form');
    theForm.addEventListener('submit', handleFormSubmit);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete All';
    deleteButton.setAttribute('id', 'delete-all');
    theForm.append(deleteButton);

    deleteButton.addEventListener('click', handleDeleteAllClick);

})

const handleFormSubmit = (event) => {
    event.preventDefault();
    const submission = document.createElement('div');
    submission.classList.add('submission');
    const albumList = document.querySelector('#album-list');
    albumList.appendChild(submission);

    const title = document.createElement('h1');
    title.textContent = event.target.title.value;
    submission.appendChild(title)

    const artist = document.createElement('h2');
    artist.textContent = event.target.artist.value;
    submission.appendChild(artist);

    const genre = document.createElement('p');
    genre.textContent = event.target.genre.value;
    submission.appendChild(genre);

    document.getElementById('new-album-form').reset()
}

const handleDeleteAllClick = function (event) {
    const albumList = document.querySelector('#album-list');
    albumList.innerHTML = '';
}