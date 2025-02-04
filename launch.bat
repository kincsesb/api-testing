@echo off
cd /d %~dp0
title Web Application Launcher
echo ===========================================
echo  Launching Web Application
echo ===========================================

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js is not installed. Downloading and installing...
    
    :: Download Node.js installer
    powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; $ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.9.0/node-v20.9.0-x64.msi' -OutFile 'node_installer.msi'"
    
    if exist node_installer.msi (
        echo Installing...
        start /wait msiexec /i node_installer.msi /passive /norestart
        del node_installer.msi
    ) else (
        echo ERROR: Failed to download the Node.js installer!
        pause
        exit /b
    )

    :: Update system PATH
    echo Updating PATH...
    set PATH=%PATH%;C:\Program Files\nodejs
)

:: Verify Node.js installation
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js installation failed!
    pause
    exit /b
)

:: Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed! Please check your Node.js installation.
    pause
    exit /b
)

:: Install backend dependencies
echo Installing Backend...
cd food-backend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Backend dependency installation failed!
    pause
    exit /b
)
echo Backend installed.
echo.

:: Install frontend dependencies
echo Installing Frontend...
cd ../food-frontend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Frontend dependency installation failed!
    pause
    exit /b
)
echo Frontend installed.
echo.

:: Start backend in a new window (window remains open)
echo Starting Backend...
start "Backend" cmd /k "cd /d %~dp0food-backend && node server.js"
if %errorlevel% neq 0 (
    echo ERROR: Backend startup failed!
    pause
    exit /b
)
echo Backend started.
echo.

:: Wait for 5 seconds
timeout /t 5 /nobreak >nul

:: Start frontend in a new window (window remains open)
echo Starting Frontend...
start "Frontend" cmd /k "cd /d %~dp0food-frontend && npm start"
if %errorlevel% neq 0 (
    echo ERROR: Frontend startup failed!
    pause
    exit /b
)
echo Frontend started.
echo.

echo ===========================================
echo  Application is running! Do not close the windows.
echo ===========================================

pause
exit