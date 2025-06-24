window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');

  // Wand cursor
  const wand = document.createElement("img");
  wand.src = "./imgs/wand2.png";
  wand.alt = "wand cursor";
  wand.classList.add("wand-cursor");
  document.body.appendChild(wand);

  document.addEventListener("mousemove", (e) => {
  wand.style.left = `${e.clientX}px`;
  wand.style.top = `${e.clientY}px`;

  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  const sparkleOffsetX = 40;
  const sparkleOffsetY = 0;
  const jitterX = (Math.random() - 0.5) * 20;
  const jitterY = (Math.random() - 0.5) * 20;

  sparkle.style.left = `${e.clientX + sparkleOffsetX + jitterX}px`;
  sparkle.style.top = `${e.clientY + sparkleOffsetY + jitterY}px`;

  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 300);
});

  // Container where buttons will be dynamically inserted
  const buttonGroup = document.getElementById('button-group');

  // Helper to create buttons consistently
  function createButton(id, text) {
    const btn = document.createElement('a');
    btn.href = '#';
    btn.id = id;
    btn.className = 'btn'; // the styling for the class is in the css file
    btn.textContent = text;
    return btn;
  }

  // Show Login and Create Account buttons (logged out state)
  function showLoggedOut() {
    buttonGroup.innerHTML = ''; // clear container

    const loginBtn = createButton('login-btn', 'Login');
    const createBtn = createButton('create-btn', 'Create Account');

    buttonGroup.appendChild(loginBtn);
    buttonGroup.appendChild(createBtn);

    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.setItem('isLoggedIn', 'true');
      location.reload();
    });

    createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Create account page coming soon!'); // Warning message because its not built yet copy paste if needed
  });

    // Add listener here if you want createBtn to do something
  }

  // Show Profile, Dashboard and Log Out buttons (logged in state)
  function showLoggedIn() {
  buttonGroup.innerHTML = ''; // clear container

  const profileBtn = createButton('profile-btn', 'Profile');
  const dashboardBtn = createButton('dashboard-btn', 'Dashboard');
  const logoutBtn = createButton('logout-btn', 'Log Out');

  buttonGroup.appendChild(profileBtn);
  buttonGroup.appendChild(dashboardBtn);
  buttonGroup.appendChild(logoutBtn);

  profileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Profile page coming soon!');
  });

  dashboardBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Dashboard is under construction!');
  });

  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    location.reload();
  });
}

  // Check login state and display correct buttons
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    showLoggedIn();
  } else {
    showLoggedOut();
  }
});