/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle("active");
    const content = faq.querySelector('.faq-content'); // assuming the content is in an element with class 'faq-content'
    content.classList.toggle("active");
  });
});
