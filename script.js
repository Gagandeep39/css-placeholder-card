const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgsText = document.querySelectorAll('.animated-bg-text');

// Replaces animation with static data
setTimeout(() => {
  getData();
}, 3000);

function getData() {
  // Add conent through Code
  header.innerHTML = `
  <img
    src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    alt="Laptop"
  />
  `;

  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,  doloremque.';
  profile_img.innerHTML = `
    <img
        src="https://randomuser.me/api/portraits/men/3.jpg"
        alt="Person"
      />
    `;
  date.innerHTML = '21 April, 2021';
  name.innerHTML = 'John Doe';

  // Removed animation class
  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgsText.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
