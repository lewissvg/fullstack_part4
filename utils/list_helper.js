const _ = require("lodash");

const dummy = blogs => {
  return 1;
};

const totalLikes = blogs => {
  return blogs.reduce((acc, { likes }) => {
    return acc + likes;
  }, 0);
};

const favouriteBlog = blogs => {
  const highestLikes = Math.max.apply(Math, blogs.map(blog => blog.likes));

  return blogs.find(blog => blog.likes === highestLikes);
};

const mostLikes = blogs => {
  const totals = _(blogs)
    .groupBy("author")
    .map((blogs, key) => ({
      author: key,
      likes: _.sumBy(blogs, "likes")
    }))
    .value();

  return _.maxBy(totals, author => author.likes);
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostLikes
};
