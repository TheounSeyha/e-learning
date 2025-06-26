document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('#theme-toggle-btn');
  const icon = document.querySelector('#theme-icon');
  const html = document.documentElement;

  const updateIcon = (isDark) => {
    icon.textContent = isDark ? '🌙' : '🌞';
  };

  if (toggle && icon) {
    toggle.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      updateIcon(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // On load, apply saved theme
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';

    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    updateIcon(isDark);
  }
});
