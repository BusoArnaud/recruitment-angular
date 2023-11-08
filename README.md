# Townsville Library

    The city of Townsville requires a new Library Management system to replace it's current
    paper based workflow. SCAMCorp was first involved into the project, but the code quality
    was not satisfied. So as our new developer, your job will be to fix code/architecture
    already implemented and to add new functionnalities.

    - We need 2 pages: "Books" - "Borrowed/Invoices"
    - "Books" -> list of books are retrieved from API:
    https://run.mocky.io/v3/0e4888e2-a6ae-4a69-aa10-721892b6cc32
    - Create a cart always accessible from any pages, you cand add/remove books from "Books"
    page into the cart, also you can remove books from cart
    - Cart validation redirect to "Borrowed" page
    - "Borrowed/Invoices" page display list of borrowed books and due date then money owed 
    to the library based on member profile and due date.

    The library is attended by two groups of people - Student members and Resident members.
    Only Members can borrow books at the library.
    
    Rules:
    
    - Students are charged 10 cents a day (0.10 eu). Exception to that rule are students who
    are in their first year, who have 15 days of free period for each book.
    
    - If a student, regardless of what year they are in, keeps a book for more than 30 days
    they are considered to be "late".
    
    - Residents are allowed to borrow books for a period of 60 days and are charged 10 cents a
    day (0.20 eu) for each day they keep the book. If a resident keeps a book for more than
    60 days they are obliged to pay 20 cents (0.25 eu) for each day after the initial 60 days
    and they are considered to be "late".
    
    - If a member (student or resident) is late with their books they cannot borrow any new
    books before returning the previous ones.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
