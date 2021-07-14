import axios from 'axios';
export const ApiCall = (setArticles, setHomeworks, setTestArticles) => {
  axios
    .post(
      'https://graphql.datocms.com/',
      {
        query: `
{
  allArticles {
    id
    title
    date
    content
    image {
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
  allTests {
    id
    subject
    testType
    sectionName
    date
    description
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
      if (setTestArticles) {
        setTestArticles(data.allTests);
      } else if (setArticles) {
        setArticles(data.allArticles);
      } else if (setHomeworks) {
        setHomeworks(data.allHomeworks);
      }
    })
    .catch((err) => console.log(err));
};
