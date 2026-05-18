const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
  tab.onclick = () => {
    const target = tab.dataset.target;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    panels.forEach(p => {
      if (p.id == target) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
  }
});