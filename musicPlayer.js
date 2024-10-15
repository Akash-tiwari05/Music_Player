

// Play and pause functionality
const audioPlayer = document.querySelector('audio');
const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });
});

// Playlist toggle functionality
const playlistCheckbox = document.getElementById('plist');
playlistCheckbox.addEventListener('change', function() {
    const playlistSection = document.querySelector('.second');
    if (playlistCheckbox.checked) {
        playlistSection.style.display = 'block';
    } else {
        playlistSection.style.display = 'none';
    }
});

// Volume control
const volumeControl = document.querySelector('audio');
document.getElementById('volume-up').addEventListener('click', function() {
    volumeControl.volume = Math.min(1, volumeControl.volume + 0.1);
});
document.getElementById('volume-down').addEventListener('click', function() {
    volumeControl.volume = Math.max(0, volumeControl.volume - 0.1);
});
