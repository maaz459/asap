const getImageLink = (image: string) => {
  return (process.env.FILE_ADDRESS || "http://64.225.87.170:1337/graphql") + image;
};

export default getImageLink;
