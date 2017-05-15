@echo off

taskkill /IM chrome.exe /T /F

start "chrome" chrome "https://xtreemze.github.io/KullabergInfoDesk/embedEn.html" -kiosk
