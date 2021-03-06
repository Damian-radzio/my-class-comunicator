import { StyledInput } from './Input.style';
import { ApiCall } from 'data/ApiCall';

export const Input = ({ articles, setArticles }) => {
  const filterArticles = (e) => {
    const filteredArticles = [];
    articles.map((article) => {
      if (
        article.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      ) {
        filteredArticles.push(article);
        setArticles(filteredArticles);
      }
      return filterArticles;
    });
    if (e.target.value.length < 1) {
      ApiCall(setArticles);
      return articles;
    }
  };
  return (
    <StyledInput
      placeholder="enter the title of the article"
      type="text"
      onChange={filterArticles}
    />
  );
};
