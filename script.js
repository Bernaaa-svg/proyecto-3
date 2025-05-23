document.addEventListener('DOMContentLoaded', () => {
    // Menú Hamburguesa
    const burgerMenu = document.getElementById('burger-menu');
    const navUl = document.querySelector('nav ul');

    burgerMenu.addEventListener('click', () => {
        navUl.classList.toggle('open');
        burgerMenu.classList.toggle('open');
    });

    // Cerrar menú al hacer click en un enlace (solo mobile)
    navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navUl.classList.remove('open');
                burgerMenu.classList.remove('open');
            }
        });
    });

    // Animación de scroll suave para los enlaces de navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación de botones (ejemplo básico con JavaScript, aunque CSS es más común)
    // Para un efecto más complejo, se podría usar JS para controlar clases y transiciones CSS.
    // Aquí solo se muestra un ejemplo de cómo interactuar.
    const primaryButton = document.querySelector('.btn-primary');
    if (primaryButton) {
        primaryButton.addEventListener('mouseover', () => {
            primaryButton.style.backgroundColor = '#0056b3'; // Tono más oscuro de azul
            primaryButton.style.transform = 'translateY(-3px)';
        });
        primaryButton.addEventListener('mouseout', () => {
            primaryButton.style.backgroundColor = '#007bff'; // Vuelve al color original
            primaryButton.style.transform = 'translateY(0)';
        });
    }

    const secondaryButton = document.querySelector('.btn-secondary');
    if (secondaryButton) {
        secondaryButton.addEventListener('mouseover', () => {
            secondaryButton.style.backgroundColor = '#1a1a1a'; // Tono más oscuro de gris
            secondaryButton.style.transform = 'translateY(-3px)';
        });
        secondaryButton.addEventListener('mouseout', () => {
            secondaryButton.style.backgroundColor = '#333333'; // Vuelve al color original
            secondaryButton.style.transform = 'translateY(0)';
        });
    }

    // Opcional: Animación al hacer scroll (ej. fade-in de secciones)
    // Esto es un poco más avanzado y requiere un "Intersection Observer"
    // para detectar cuándo una sección entra en el viewport.
    // Para mantenerlo "puro" y sencillo, se puede añadir una clase
    // como 'fade-in' a las secciones y controlar su opacidad y transform
    // en CSS cuando la clase se añade con JS.
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% de la sección visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                // Opcional: Si quieres que la animación se revierta al salir del viewport
                // entry.target.style.opacity = '0';
                // entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0'; // Inicialmente ocultas
        section.style.transform = 'translateY(20px)'; // Ligeramente hacia abajo
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        sectionObserver.observe(section);
    });
});