const getElementByClassName = (className) => document.getElementsByClassName(className);

const setActive = (e) => {
  const elements = getElementByClassName('nav-link');
  if (e.target.classList.value.includes('active')) {
    console.log('active')
  }
  elements.map(el => console.log(el))
  console.log(elements);
}
