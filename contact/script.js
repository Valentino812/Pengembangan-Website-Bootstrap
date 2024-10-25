$(document).ready(function()  {
    // Entrance Transition Start 
    // Trigger the active class to do the transition for fade-in
    $('.fade-in').each(function(index) {
        $(this).delay(120 * index).queue(function(next) { // 120ms delay between transitions of each element 
            $(this).addClass('active');
            next();
        });
    });
    // Entrance Transition End

    // Contact Modal Start
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        const firstname = $('#first-name').val();
        const lastname = $('#last-name').val();
        const email = $('#contact-email').val();
        const message = $('#message').val();
        if (firstname && lastname && email && message) {
            const successModal = new bootstrap.Modal(document.getElementById('contactModal'));
            successModal.show();
        } else {
            alert('Please fill all the form'); 
        }
        });
    // Contact Modal End

    // Subscribe Modal Start
    $('#subscribeForm').on('submit', function(event) {
        event.preventDefault();
        const firstname = $('#firstname').val();
        const email = $('#email').val();
        if (firstname && email) {
          const successModal = new bootstrap.Modal(document.getElementById('subscribedModal'));
          successModal.show();
        } else {
          alert('Please fill out the first name and email'); 
        }
      });
    // Subscribe Modal End
})