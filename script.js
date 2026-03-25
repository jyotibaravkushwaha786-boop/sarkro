// Get the notification elements
const notificationItems = document.querySelectorAll('.notifications li');

// Add click event listeners to each notification
notificationItems.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle the 'active' class on the clicked notification
    item.classList.toggle('active');
  });
});
  <footer>
    <p>&copy; 2023 Sarkari Result. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
