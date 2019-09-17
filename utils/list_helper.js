const dummy = blogs => {
  return 1;
};

const totalLikes = blogs => {
  const total = blogs.reduce((acc, { likes }) => {
    return acc + likes;
  }, 0);
  return total;
};

module.exports = {
  totalLikes,
  dummy
};
