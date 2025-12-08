
// Get modal element
const modal = document.getElementById('donateModal');
const btn = document.getElementById('donateBtn');
const span = document.getElementsByClassName('close')[0];

// Open modal
btn.onclick = function () {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal when clicking X
span.onclick = function () {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});