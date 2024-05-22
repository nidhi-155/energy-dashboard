# Project Name

[Project description]

## API Documentation

### Overview

This document describes the API endpoints for retrieving energy consumption and generation data for users.

### Base URL

The base URL for all endpoints is `http://localhost:3000`.

### Endpoints

#### Weekly Energy Data

- **URL**: `/energy/week/:userId`
- **Method**: `GET`
- **URL Params**: `userId=[integer]`
- **Success Response**: 
  - **Code**: 200
  - **Content**: `{ consumption: [array], generation: [array] }`
- **Error Response**: 
  - **Code**: 404
  - **Content**: `{ message: 'User not found' }`

#### Monthly Energy Data

- **URL**: `/energy/month/:userId`
- **Method**: `GET`
- **URL Params**: `userId=[integer]`
- **Success Response**: 
  - **Code**: 200
  - **Content**: `{ consumption: [array], generation: [array] }`
- **Error Response**: 
  - **Code**: 404
  - **Content**: `{ message: 'User not found' }`

#### Yearly Energy Data

- **URL**: `/energy/year/:userId`
- **Method**: `GET`
- **URL Params**: `userId=[integer]`
- **Success Response**: 
  - **Code**: 200
  - **Content**: `{ consumption: [array], generation: [array] }`
- **Error Response**: 
  - **Code**: 404
  - **Content**: `{ message: 'User not found' }`

### Examples

To get the weekly energy data for the user with ID 1, you would send a GET request to `http://localhost:3000/energy/week/1`.

### Notes

The `userId` parameter in the URL should be the ID of the user for whom you want to retrieve data. If a user with the given ID does not exist, the API will return a 404 error.