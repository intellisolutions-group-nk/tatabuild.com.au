@echo off
set "SOURCE_DIR=C:\Users\User\.gemini\antigravity\brain\4f056a3e-a870-4d1c-af15-acfef5513a25"
set "DEST_DIR=d:\tatabuild\tatabuild-next\public\images\projects"

if not exist "%DEST_DIR%" mkdir "%DEST_DIR%"

echo Copying Heritage Renovation v2...
copy /Y "%SOURCE_DIR%\heritage_renovation_v2_1778065001913.png" "%DEST_DIR%\heritage-terrace-renovation-v2.png"

echo Copying Logistics Center v2...
copy /Y "%SOURCE_DIR%\logistics_center_v2_1778065025803.png" "%DEST_DIR%\industrial-logistics-center-v2.png"

echo Done! Please refresh your browser.
pause
