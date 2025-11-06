# Audio Codec testing tool

This provides a way to test audio codecs and their various settings. This initial release only supports LC3, but additional codecs will be added.

### Prerequisites
- Node.js and npm installed

### Install dependencies
```bash
npm install
```

### Build and Serve
To start the development server:
```bash
npm run dev
```
Visit the local URL shown in the terminal (usually http://localhost:5173/).

To build for production:
```bash
npm run build
```

### Rebuilding the liblc3

This uses emscripten

```
make CC="emcc" LDFLAGS="-sSIDE_MODULE=1" CFLAGS=-fPIC V="" tools

emcc build/src/attdet.o build/src/bits.o build/src/bwdet.o build/src/energy.o build/src/lc3.o build/src/ltpf.o build/src/mdct.o build/src/plc.o build/src/sns.o build/src/spec.o build/src/tables.o build/src/tns.o build/tools/elc3.o build/tools/lc3bin.o build/tools/wave.o -o bin/elc3mod.js -s EXPORT_ES6=1 -s MODULARIZE=1
```

## License
liblc3 is under the Apache 2.0 license
