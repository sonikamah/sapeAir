#sapeFeeds

Steps:

run :
1. npm install
2. node start

test :
1] bundle // webpack will be used


=============== GENERAL NOMENCLATURE FOR FRONTEND===============

1. All controllers must be enclosed in an IIFE with 'window' object passed as an argument
2. 'use strict' mode in every js file
3. All variable names should be written as camelCase.

=============== DESIGN PATTERN AND DIRECTORY STRUCTURE FOR FRONTEND ===============

1. Modularized design pattern to be followed for angularJS
2. Main module lists all its dependencies in its definition
3. Each module has a folder with 'index.js' file containing definition of that module and their dependencies
4. Each module folder has sub-folders for directives, controllers, services etc. containing 'index.js' each with definition of that sub-module
5. All the API interactions will be done using services.

============== NAMING CONVENTION FOR FRONTEND ====================

1. Each controller will be names as <module_name>-<specific_partial_functionality>-controller.js
   (Same applies for directives, services etc.)
   Eg: For profile module with search functionality, the name of the controller will be profile-search-controller.js
2. Same naming convention applies to HTML partials. In the above case the partial name will be profile-search-partial.html