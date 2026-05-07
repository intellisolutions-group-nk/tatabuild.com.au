@echo off
set "DEST_DIR=d:\tatabuild\tatabuild-next\public\images\projects"
if not exist "%DEST_DIR%" mkdir "%DEST_DIR%"

echo Downloading gallery images for Modern Coastal Villa...
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800' -OutFile '%DEST_DIR%\gallery-modern-coastal-villa-1.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800' -OutFile '%DEST_DIR%\gallery-modern-coastal-villa-2.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800' -OutFile '%DEST_DIR%\gallery-modern-coastal-villa-3.jpg'"

echo Downloading gallery images for Downtown Tech Hub...
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800' -OutFile '%DEST_DIR%\gallery-downtown-tech-hub-1.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800' -OutFile '%DEST_DIR%\gallery-downtown-tech-hub-2.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800' -OutFile '%DEST_DIR%\gallery-downtown-tech-hub-3.jpg'"

echo Downloading gallery images for Heritage Terrace Renovation...
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1512918766671-ad6507962077?w=800' -OutFile '%DEST_DIR%\gallery-heritage-terrace-renovation-1.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800' -OutFile '%DEST_DIR%\gallery-heritage-terrace-renovation-2.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800' -OutFile '%DEST_DIR%\gallery-heritage-terrace-renovation-3.jpg'"

echo Downloading gallery images for Industrial Logistics Center...
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800' -OutFile '%DEST_DIR%\gallery-industrial-logistics-center-1.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1504439268584-b72c5019471e?w=800' -OutFile '%DEST_DIR%\gallery-industrial-logistics-center-2.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800' -OutFile '%DEST_DIR%\gallery-industrial-logistics-center-3.jpg'"

echo Downloading gallery images for Luxury Penthouse Fitout...
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800' -OutFile '%DEST_DIR%\gallery-luxury-penthouse-fitout-1.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800' -OutFile '%DEST_DIR%\gallery-luxury-penthouse-fitout-2.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1484101403033-5710672d68ae?w=800' -OutFile '%DEST_DIR%\gallery-luxury-penthouse-fitout-3.jpg'"

echo Downloading gallery images for Sustainable Urban Apartments...
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800' -OutFile '%DEST_DIR%\gallery-sustainable-urban-apartments-1.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' -OutFile '%DEST_DIR%\gallery-sustainable-urban-apartments-2.jpg'"
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1512918766671-ad6507962077?w=800' -OutFile '%DEST_DIR%\gallery-sustainable-urban-apartments-3.jpg'"

echo Gallery download complete!
