document.addEventListener('DOMContentLoaded', function () {
    const courseSelect = document.getElementById('course');
    const mapelSections = document.querySelectorAll('.mapel');

    courseSelect.addEventListener('change', function () {
        mapelSections.forEach(section => section.style.display = 'none');
        const selectedCourse = courseSelect.value;
        if (selectedCourse) {
            document.getElementById('mapel-' + selectedCourse.toLowerCase()).style.display = 'block';
        }
    });

    // Form validation
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            var forms = document.getElementsByClassName('needs-validation');
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

    // Burger menu functionality
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Add responsiveness
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');

    burger.addEventListener('click', function() {
        this.classList.toggle('toggle');
        navMenu.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
});
