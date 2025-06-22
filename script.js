document.addEventListener("DOMContentLoaded", () => {
  const animados = document.querySelectorAll(".animado");

  const mostrar = (entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
      }
    });
  };

  const observer = new IntersectionObserver(mostrar, { threshold: 0.2 });

  animados.forEach(el => observer.observe(el));
});
