const videos = [
    { src: 'video1.mp4', comments: ['Comment 1', 'Comment 2', 'Comment 3'] },
    { src: 'video2.mp4', comments: ['Comment A', 'Comment B', 'Comment C'] },
    // Add more video and comment pairs here
];

let currentIndex = 0;

const videoElement = document.getElementById('reelVideo');
const commentsSection = document.getElementById('commentsSection');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % videos.length;
    updateContent();
});

function updateContent() {
    videoElement.src = videos[currentIndex].src;
    const commentsHTML = videos[currentIndex].comments.map(comment => <p>${comment}</p>).join('');
    commentsSection.innerHTML = <div class="comments">${commentsHTML}</div>;
}

// Initialize the content
updateContent();