# React Paginantion

## Dependencies
React, of course, this is intended for use in React projects.
(Bulma)[https://bulma.io/] for styling.

## How to use this
I sugest download this as a zip and add Pagination.js and PaginationContent.js to your project folder.
Render ``<Pagination itens={array} />`` passing in an array of the itens you need to be paginated.
The PaginationContent is going to hold all the content (located in the array you passed in Pagination), this is where you should create the render for them, use the map method located in line 9 for that.
In Pagination, configure how many itens per page you want by changing the state perPage variable (default is 6).
In the end of Pagination file (lines 69 - 72) you may configure the position of the Navbar and Content, if you want Navbar at the top, bottom or both, just copy or cut the Navbar and paste it regarding Content position.

## Known issues
This will just add numbers to the pagination no matter how many entries there are, if there are 100 pages you will have 100 numbers to click on, it does not collapse at this point.