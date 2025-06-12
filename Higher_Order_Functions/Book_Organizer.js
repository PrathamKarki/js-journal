/* Book organizer using higher order functions such as
 filter,  and more */


const books = [
    {
        title: 'Who moved my cheese?',
        authorName: "Dr Spencer",
        releaseYear : 2010,
    },

    {
       title: "To kill a mockingBird",
       authorName:  'Harper Lee',
       releaseYear: 1948
    },

    {
        title: 'Frankenstein',
        authorName: 'Mary Shelley',
        releaseYear: 1818
    },
]


function sortByYear(book1, book2){
    if(book1.releaseYear < book2.releaseYear){
        return -1;
    } 
    else if(book1.releaseYear > book2.releaseYear){
        return 1
    } 
    else {
        return 0;
    }
}


const filteredBooks = books.filter(book => book.releaseYear >= 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);