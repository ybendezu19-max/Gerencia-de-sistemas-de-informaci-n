document.addEventListener('DOMContentLoaded', function () {
  const unidad1 = document.getElementById('unidad1');
  const dropdown = unidad1.querySelector('.dropdown');
  let timeout;

  dropdown.style.display = 'none';

  unidad1.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    dropdown.style.display = 'block';
  });

  unidad1.addEventListener('mouseleave', () => {
    // Espera 300ms antes de cerrar, da tiempo a mover el cursor
    timeout = setTimeout(() => {
      dropdown.style.display = 'none';
    }, 300);
  });

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    dropdown.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdown.style.display = 'none';
    }, 500);
  });
});
