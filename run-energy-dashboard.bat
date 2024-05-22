
set _location= %~dp0

cd %_location%
start cmd /k "cd backend && npm start"

cd %_location%
start cmd /k "cd frontend && npm start"

pause