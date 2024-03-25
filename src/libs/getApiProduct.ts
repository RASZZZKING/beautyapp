const getApiProduct = async (path: string, query?: string) => {
  // const url = `https://${process.env.NEXT_PUBLIC_API_HOST}/${path}?${query}`;
  // const headers = new Headers();
  // headers.append("X-RapidAPI-Key", process.env.NEXT_PUBLIC_API_KEY as string);
  // headers.append("X-RapidAPI-Host", process.env.NEXT_PUBLIC_API_HOST as string);
  // const options = {
  //   method: "GET",
  //   headers: headers,
  // };
  const url = 'https://fashion4.p.rapidapi.com/v1/version';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f59ba5daf7msh7ee1175249366f1p1bb1c1jsn8143723aa313',
		'X-RapidAPI-Host': 'fashion4.p.rapidapi.com'
	}
};
  const response = await fetch(url, options);
  const beautyAPI = await response.json();
  return beautyAPI;
};

export default getApiProduct;
