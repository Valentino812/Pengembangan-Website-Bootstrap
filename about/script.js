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