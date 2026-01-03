/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

const likeButton = document.getElementById("like-button");
const heart = document.getElementById("heart");
const likeCount = document.getElementById("like-count");

let count = 0;

likeButton.addEventListener("click", () => {
  count++;
  likeCount.textContent = `${count} Likes`;

  // Add 'active' class to trigger animation
  likeButton.classList.toggle("active");

  // Remove class after animation ends
  setTimeout(() => {
    likeButton.classList.toggle("active");
  }, 300); // Match the duration in CSS for animation
});
