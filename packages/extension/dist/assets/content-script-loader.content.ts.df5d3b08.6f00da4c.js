(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content.ts.df5d3b08.js")
    );
  })().catch(console.error);

})();
