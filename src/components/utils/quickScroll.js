export default function quickScroll(className, textNumber) {
  const destination = document.querySelector(className + (textNumber ?? ''));

  destination.scrollIntoView({ behavior: 'smooth' });

  // add color animation
  destination.classList.add('highlighted');
  setTimeout(() => destination.classList.remove('highlighted'), 1000);
}
