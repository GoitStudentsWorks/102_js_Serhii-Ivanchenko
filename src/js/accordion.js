import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// const icon = document.querySelector('.ac-btn-icon');

function createAccordion({
  containerClass,
  elementClass,
  triggerClass,
  panelClass,
  openOnInit,
  duration,
}) {
  return new Accordion(containerClass, {
    elementClass,
    triggerClass,
    panelClass,
    showMultiple: true,
    openOnInit: [],
    duration: 400,
    beforeOpen: icon => {
      const useElement = icon.querySelector('use');
      useElement.setAttribute('href', '../img/icons.svg#icon-arrow-up');
    },
    beforeClose: icon => {
      const useElement = icon.querySelector('use');
      useElement.setAttribute('href', '../img/icons.svg#icon-arrow-down');
    },
  });
}

export { createAccordion };
