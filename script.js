function toggleInfo(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === "block" ? "none" : "block";
  }
  
  function toggleMore(id) {
    const more = document.getElementById(id);
    more.style.display = more.style.display === "block" ? "none" : "block";
  }

  // Cache modal elements
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

// Show modal and inject the corresponding .info HTML
function showModal(infoId) {
  // Grab the HTML from the hidden inline info section
  const content = document.getElementById(infoId).innerHTML;
  modalBody.innerHTML = content;
  modal.style.display = 'flex';  // flex to center
}

// Close handler
function closeModal() {
  modal.style.display = 'none';
  modalBody.innerHTML = '';
}

// Wire up the close button
modalClose.onclick = closeModal;

// Also close if user clicks outside the content box
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}

// Toggle the element inside the modal
function toggleMore(id) {
  // find the deeper-layer element within the modal
  const el = document
               .getElementById('modal-body')
               .querySelector(`#${id}`);
  if (!el) return; // nothing to do if it's not in the modal
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

