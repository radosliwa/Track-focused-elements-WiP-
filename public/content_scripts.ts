chrome.runtime.onMessage.addListener((request, sender, sendResponse)=> {
  console.log(request.event ?
      "from extension:" + request.event :
      "dupa");

  // function loadCSS() {
  //     let cssToInject = `.tracker-focused { background-color: red; }`;

  //     function onError(error: any) {
  //         console.log(`Error: ${error}`);
  //     }
  //     let insertingCSS = chrome.scripting.insertCSS({css:cssToInject, target: sender?.tab?.id});
  //     insertingCSS.then(null, onError);
  // }
  // await loadCSS();
  // @TODO event type
  let targetType: keyof Event = 'target';
  document.addEventListener("keydown", (event: KeyboardEvent): void => {
      const focusedElement = document.querySelector('.tracker-focused');
      if(focusedElement) focusedElement.classList.remove('tracker-focused');
      const target = event[targetType] as HTMLElement;
      target.classList.add('tracker-focused');
  });
});
