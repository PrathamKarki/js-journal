/* 
    Building library manager using higher order functions
    such as map, filter and reduce
*/

const library = [
    {
        title: "Your Next Five Moves: Master the Art of Business Strategy",
        author: "Patrick Bet-David and Greg Dinkin",
        about: "A book on how to plan ahead",
        pages: 320
    },

    {
        title: "Atomic Habits",
        author: "James clear",
        about: "A practical book about discarding bad habits and building good ones",
        pages: 320,
    },

    {
        title: "Choose Your Enemies Wisely: Business Planning for the Audacious Few",
        author: 'Patrick Bet-David',
        about: "A book that emphasizes the importance of identifying and understanding one's adversaries to succedd in buisness world",
        pages: 304,

    },

    {
        title: 'The Embedded Entrepreneur',
        author: 'Arvid Kahl',
        about: 'A book focusing on how to build an audience-driven business',
        pages: 308,
    },

   {

        title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
        author: 'Jon Gordon',
        about: 'A book about effective ways to lead a coffee bean lifestyle',
        pages: 256,
   },

   {
        title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
        author: 'Jeff DeGraff and Staney DeGraff',
        about: 'A book on how to develop creativity and  innovation skills',
        pages: 168,
  },

  {

        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki and Sharon Lechter',
        about: 'A book about financial literacy, financial independence, and building wealth. ',
        pages: 336,

  },

  {

    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },

];

/* Function to display books */

function displayBooks(books){

  let result = '';

  const displayItem = books.map((item)=>{
      return `Title: ${item.title}, Author: ${item.author}, Pages: ${item.pages}`
   });
   result += displayItem;
   return result;
}

/* Function to get book summaries */

function getBookSummaries(books){

    const summary = books.map((item)=>{
        return item.about;
    });

    return summary;
    
}

/* Function for getBooks BY author */

function getBooksByAuthor(books, author){

    const authorName = books.filter((item)=>{
        return item.author === author;
    });


    return authorName;
}

/* Function to get total Pages of books */


function getTotalPages(books){
    const totalPage = books.reduce((acc,nextVal)=>{
        return acc + nextVal;
    },0);

    return totalPage;
}

