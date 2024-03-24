function smoothScroll(selector: string) {
  document.querySelector(`${selector}`)!.scrollIntoView({
    behavior: 'smooth',
  });
}

export default smoothScroll;
