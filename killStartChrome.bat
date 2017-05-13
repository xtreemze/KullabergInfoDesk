@echo off

taskkill /IM chrome.exe /T

start "chrome" chrome "https://xtreemze.github.io/KullabergInfoDesk/embedEn.html" -kiosk
