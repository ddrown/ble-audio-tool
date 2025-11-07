import elc3 from "./elc3mod.js";

const input = document.createElement("input");
input.type = "file";
input.accept = ".wav,audio/wav";
let inputFileData = undefined;
input.onchange = (event) => {
  const file = event.target.files[0]; // Get the first selected file
  document.getElementById("filename").textContent = file.name;

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
        const arrayBuffer = e.target.result; // Get the ArrayBuffer
        inputFileData = new Uint8Array(arrayBuffer); // Create Uint8Array
    };

    reader.onerror = function(e) {
        console.error("Error reading file:", e.target.error);
    };

    reader.readAsArrayBuffer(file); // Start reading the file as an ArrayBuffer
  }
}

document.getElementById("clear").addEventListener("click", () => {
  inputFileData = undefined;
  document.getElementById("filename").textContent = "";
});

document.querySelector("#convert-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const Module = {
    arguments: ["-b", "160000", "/input.wav", "/output.lc3"],
    preRun: () => {
      if (inputFileData !== undefined) {
        Module.FS.writeFile("/input.wav", inputFileData);
      }
    },
  };

  elc3(Module);
});

document.querySelector("#upload").addEventListener("click", () => {
  input.click();
});