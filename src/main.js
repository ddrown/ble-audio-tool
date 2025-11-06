import elc3 from "./elc3mod.js";

document.querySelector("#convert-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const Module = {
    /*
    printErr: (function () {
      const element = document.getElementById('stderr');
      if (element) element.value = ''; // clear browser cache
      return (...args) => {
        const text = args.join(' ');
        // These replacements are necessary if you render to raw HTML
        //text = text.replace(/&/g, "&amp;");
        //text = text.replace(/</g, "&lt;");
        //text = text.replace(/>/g, "&gt;");
        //text = text.replace('\n', '<br>', 'g');
        console.log(text);
        if (element) {
          element.value += text + "\n";
          element.scrollTop = element.scrollHeight; // focus on bottom
        }
      };
    })(),
    */
    arguments: ["-b", "160000", "example-audio/11ff_.48k.wav", "11ff_.lc3"],
  };

  elc3(Module);
});
