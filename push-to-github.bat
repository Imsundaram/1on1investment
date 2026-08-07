@echo off
cd /d "%~dp0"
echo Pushing changes to GitHub...
"C:\Program Files\Git\cmd\git.exe" push origin main --force
pause
