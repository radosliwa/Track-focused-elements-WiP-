chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.event ?
    "from extension:" + request.event :
    "dupa");

  let targetType: keyof Event = 'target';
  document.addEventListener("keydown", (event: KeyboardEvent): void => {
    const focusedElement: HTMLElement | null = document.querySelector('.tracker-focused');
    const focusedElementOriginalBackground = focusedElement ? focusedElement.style.backgroundColor : '';
    if (focusedElement) {
      focusedElement.style.backgroundColor = focusedElementOriginalBackground;
      focusedElement.classList.remove('tracker-focused')
    };
    // add background color to focused element
    const target = event[targetType] as HTMLElement;
    target.classList.add('tracker-focused')
    target.style.backgroundColor = 'red';
  });
});
