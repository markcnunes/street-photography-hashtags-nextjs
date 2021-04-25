// const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher = async (url) => {
  console.log('call fetcher');
  const res = await fetch(url);
  const data = await res.json();

  console.log('data', data);

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default fetcher;
