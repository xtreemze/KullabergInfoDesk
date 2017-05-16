@echo off

taskkill /IM /F chrome.exe /T

start chrome "https://xtreemze.github.io/KullabergInfoDesk/embedEn.html" -kiosk -allow-running-insecure-content
