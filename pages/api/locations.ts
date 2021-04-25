import locations from 'data/locations';

export default (req, res): void => {
  res.statusCode = 200;
  res.json(locations);
};
