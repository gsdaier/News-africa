const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1839035a72be4746ac708d34cc5d4608');

// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   q: 'trump',
//   category: 'politics',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });

// To query sources
// All options are optional
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);

  const news1 = document.getElementById("title");
  function addNews(){
    news1.appendChild();
  }
});