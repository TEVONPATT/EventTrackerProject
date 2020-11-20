# EventTrackerProject
## Overview
* This is a program that stores the names of artists and the works they have created, along with their primary art style.
* Users will be able to view a list of all artists as well as create, update, and delete one.

### REST route
|    **Method Names**   |  **Action**  |     **Path**    |
|-----------------------|--------------|-----------------|
|  Create a new artist  |     POST     |   /api/artists  |
|   Update an artist    |      PUT     |  /api/artists/1 |
|   Delete an artist    |      DEL     |      /api/2     |
|    List of artists    |      GET     |  /api/artists   |

  <!-- * Create a new artist - method: POST - Path: /api/artists
  * Update an artist - method: PUT - Path: /api/artists/1
  * Delete an artist - method: DEL - Path: /api/2
  * List of artists - method: GET - Path: /api/artists -->

### Lessons Learned
* Using REST routes to ensure proper mapping of HTTP actions with controller request methods.
* How to implement a service layer in order to interact with the database.
* Utilizing the setStatus() method in order to set a status code that allows those interacting with the browser to be either redirected or have a problem reported.

### Technology Used
- Spring Tool Suite
- Hibernate
- Java
- MAMP
- MySql
- Gradle

<!-- You must include a README.md that describes your program and how to access it on AWS. This must document your REST route URIs and HTTP methods, and what they do. -->
