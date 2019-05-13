'use strict';

// Reveals form
function revealForm(event) {
  const clickedOn = event.target;
  if (event.target.textContent === 'Select this Book' || 'Update Details') {
    $(clickedOn).parent().find('form').removeClass('hidden');
  }
}

// Hides form
function hideForm(event) {
  const clickedOn = event.target;
  if (event.target.textContent === 'Hide Form') {
    $(clickedOn).parent().addClass('hidden');
  }
}

$('.show-add-form').on('click', (event) => {
  revealForm(event);
  hideForm(event);
});