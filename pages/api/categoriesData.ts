import categories from 'data/categories';

export default (req, res): void => {
  res.statusCode = 200;
  res.json(categories);
};
