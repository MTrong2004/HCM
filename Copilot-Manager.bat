@echo off
chcp 65001 >nul
title HCM Presentation - Copilot Manager
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File ".\Copilot-Manager.ps1"
