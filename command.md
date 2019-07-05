```
sudo rm -rf ./dist && sudo rm -rf main-window.jsc

electron .
sudo npx electron-builder

./dist/linux-unpacked/package-test
```