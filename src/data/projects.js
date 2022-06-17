import images from "./images";

const farmly = {
  id: "1",
  title: "Farmly",
  text:
    "A mobile app that brings small farmers into the online economy by digitizing the farmer's market experience.",
  tag: ["Mobile"],
  img: images.farmly,
  tools: ["Ionic", "Firebase", "Stripe", "Google Cloud"],
  link: "",
};

const yelpcamp = {
  id: "2",
  title: "YelpCamp",
  text:
    "A yelp-like web application where users can view/post campground locations and reviews.",
  tag: ["Fullstack"],
  img: images.yelpcamp,
  tools: ["NodeJS", "ExpressJS", "MongoDB"],
  link: "",
};

const hexspace = {
  id: "3",
  title: "HexSpace",
  text:
    "A website where you can view splash arts from the game, League of Legends, without opening the game. ",
  tag: ["Frontend"],
  img: images.hexspace,
  tools: ["React", "Express", "Axios"],
  link: "https://hexspace.netlify.app",
};

const gericht = {
  id: "3",
  title: "Gericht",
  text:
    "A responsive restaurant landing page",
  tag: ["Frontend"],
  img: images.gericht,
  tools: ["React", "Express", "Axios"],
  link: "https://nico-gao.github.io/restaurant-practice/",
};

const projects = [hexspace, yelpcamp, farmly, gericht];

export default projects;
