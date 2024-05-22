# Energy Dashboard

This project consists of a frontend and a backend that together form the Energy Dashboard.

## Frontend

The frontend is a web application that displays energy consumption and generation data on a graph. It's built with html and javascript. It uses http-server to run on localhost (using nodejs version v16.13.2).

## Backend

The backend is a server that provides the energy data to the frontend. It's built with nodejs (version v16.13.2).

## Running the Project

To run the project, you need to have Node.js and npm installed on your machine. If you don't have them installed, you can download them from [the official Node.js website](https://nodejs.org/).

After installing Node.js and npm, you need to install the project dependencies. Navigate to the project directory in your terminal and run the `install-dependencies.bat` by double-clicking or running the following command in the command line:

```bash
./install-dependencies.bat
```

If you're using a Unix-based system like Linux or macOS, you might need to make the `.sh` file executable first before executing the above command:

```bash
chmod +x install-dependencies.sh
```

Then run the script:

```bash
./install-dependencies.sh
```

This will install all the necessary dependencies listed in the `package.json` file for both frontend and backend.

Once the dependencies are installed, you can run the project. If you're using Windows, you can do this by double-clicking the `run-energy-dashboard.bat` file in Windows Explorer. Alternatively, you can run the project from the command line with the following command:

```bash
./run-energy-dashboard.bat
```

If you're using a Unix-based system like Linux or macOS, you might need to make the `.sh` file executable first:

```bash
chmod +x run-energy-dashboard.sh
```

Then you can run the project with the following command:

```bash
./run-energy-dashboard.sh
```

The project should now be running, and you can view it by opening a web browser and navigating to the localhost URL displayed in your terminal.

## Ports

By default, the backend server runs on port 3000 and the frontend runs on port 8080. You can access the frontend application in your web browser by navigating to `http://localhost:8080`. The backend server can be accessed at `http://localhost:3000`.

