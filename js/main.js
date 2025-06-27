// This file contains JavaScript functionality for the HQ Power Rwanda website.
// It includes form validation, interactivity, and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Example of form validation for the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                event.preventDefault();
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
            }
        });
    }

    // Example of interactivity: toggle mobile navigation
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Intranet Modal
    document.querySelectorAll('.dropdown-content a[href="intranet.html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('intranetModal').style.display = 'flex';
        });
    });
    document.getElementById('closeIntranet').onclick = function() {
        document.getElementById('intranetModal').style.display = 'none';
        document.getElementById('resetForm').style.display = 'none';
    };
    // Show reset form
    document.getElementById('showReset').onclick = function(e) {
        e.preventDefault();
        document.getElementById('resetForm').style.display = 'block';
    };

    // Sign Up Modal
    document.getElementById('openSignup').onclick = function() {
        document.getElementById('signupModal').style.display = 'flex';
    };
    document.getElementById('closeSignup').onclick = function() {
        document.getElementById('signupModal').style.display = 'none';
    };

    // Open Intranet Modal
    document.getElementById('openIntranet').onclick = function(e) {
        e.preventDefault();
        document.getElementById('intranetModal').style.display = 'flex';
    };

    // Switch from Sign Up to Intranet Login
    document.getElementById('showIntranet').onclick = function(e) {
        e.preventDefault();
        document.getElementById('signupModal').style.display = 'none';
        document.getElementById('intranetModal').style.display = 'flex';
    };

    // Close modals on outside click
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
            if(event.target.id === 'intranetModal') document.getElementById('resetForm').style.display = 'none';
        }
    }

    // Dropdown click-to-toggle for Staff & Careers
    var dropdown = document.querySelector('.dropdown');
    var dropbtn = dropdown.querySelector('.dropbtn');
    dropbtn.addEventListener('click', function (e) {
        e.preventDefault();
        dropdown.classList.toggle('open');
    });
    // Optional: close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });

    // Dropdown click-to-toggle for Who We Are (mobile-friendly)
    var whoDropdown = document.querySelector('.who-dropdown');
    if (whoDropdown) {
        var whoBtn = whoDropdown.querySelector('.dropbtn');
        whoBtn.addEventListener('click', function (e) {
          if (window.innerWidth < 900) {
            e.preventDefault();
            whoDropdown.classList.toggle('open');
          }
        });
        document.addEventListener('click', function (e) {
          if (!whoDropdown.contains(e.target)) {
            whoDropdown.classList.remove('open');
          }
        });
      }
});