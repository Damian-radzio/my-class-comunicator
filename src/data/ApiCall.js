import axios from 'axios';
export const ApiCall = (setArticles) => {
  axios
    .post(
      'https://graphql.datocms.com/',
      {
        query: `
          {
            allArticles{
              id
              title
              date
              content
              image{
                url
              }
            }
          }`,
      },
      {
        headers: {
          authorization: `Bearer: ${process.env.REACT_APP_DATOCMS_TOKEN}`,
        },
      }
    )
    .then(({ data: { data } }) => {
      setArticles(data.allArticles);
    })
    .catch((err) => console.log(err));
};
