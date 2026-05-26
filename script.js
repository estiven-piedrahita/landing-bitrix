// ===========================
// FORM VALIDATION & SUBMIT
// ===========================

const btnRegister = document.getElementById('btnRegister');

btnRegister.addEventListener('click', function () {
  const nombre  = document.getElementById('nombre').value.trim();
  const email   = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const empresa = document.getElementById('empresa').value.trim();

  if (!nombre || !email || !telefono || !empresa) {
    showAlert('Por favor, completa todos los campos.', 'error');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showAlert('Por favor, introduce un email válido.', 'error');
    return;
  }

  // Simulate successful submit
  showAlert('¡Registro exitoso! Pronto nos pondremos en contacto contigo.', 'success');

  // Reset form
  document.getElementById('nombre').value   = '';
  document.getElementById('email').value    = '';
  document.getElementById('telefono').value = '';
  document.getElementById('empresa').value  = '';
});

// ===========================
// ALERT HELPER
// ===========================

function showAlert(message, type) {
  // Remove existing alert if any
  const existing = document.querySelector('.custom-alert');
  if (existing) existing.remove();

  const alert = document.createElement('div');
  alert.className = 'custom-alert custom-alert--' + type;
  alert.textContent = message;

  Object.assign(alert.style, {
    position: 'fixed',
    top: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '14px 28px',
    borderRadius: '10px',
    fontSize: '0.92rem',
    fontWeight: '600',
    color: '#fff',
    zIndex: '9999',
    boxShadow: '0 6px 24px rgba(0,0,0,0.25)',
    transition: 'opacity 0.4s ease',
    background: type === 'success'
      ? 'rgba(16, 185, 129, 0.95)'
      : 'rgba(239, 68, 68, 0.95)',
    backdropFilter: 'blur(8px)',
  });

  document.body.appendChild(alert);

  setTimeout(() => {
    alert.style.opacity = '0';
    setTimeout(() => alert.remove(), 400);
  }, 3500);
}

// ===========================
// INPUT FOCUS EFFECTS
// ===========================

document.querySelectorAll('.field input').forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.querySelector('label').style.color = 'rgba(56,182,232,1)';
  });
  input.addEventListener('blur', () => {
    input.parentElement.querySelector('label').style.color = 'rgba(255,255,255,0.85)';
  });
});
