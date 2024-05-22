
set _location= %~dp0

cd %_location%
start cmd /k "cd backend && npm install"

cd %_location%
start cmd /k "cd frontend && npm install"

"DONE"

pause