import axios from 'axios';
export const ApiCall = (setArticles, setHomeworks) => {
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
            allHomeworks {
              id
              homeworkPage
              homeworkInfo
              deadline
              subjectName
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
      if (setArticles) setArticles(data.allArticles);
      if (setHomeworks) setHomeworks(data.allHomeworks);
    })
    .catch((err) => console.log(err));
};
