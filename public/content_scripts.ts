chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.event ?
    "from extension:" + request.event :
    "dupa");

  let targetType: keyof Event = 'target';
  document.addEventListener("keydown", (event: KeyboardEvent): void => {
    const focusedElement = document.querySelector('.tracker-focused');
    if (focusedElement) focusedElement.classList.remove('tracker-focused');
    const target = event[targetType] as HTMLElement;
    target.classList.add('tracker-focused');
  });
});
