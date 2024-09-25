const str = "HeLlOs world!";

// console.log(str[1]);
// console.log(str[4]);

// console.log(str.length);

// console.log(str.indexOf("worl"));

// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));

// console.log(str.includes("l"));

// console.log(str.slice(6));
// console.log(str.slice(6, 8));
// console.log(str.slice(-3));

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log("HeLlOs world!".toUpperCase());

const capitalize = function (str) {
  const string = str.toLowerCase();
  return string[0].toUpperCase() + string.slice(1);
};

// console.log(capitalize("maryam"));
// console.log(capitalize("maRyAm"));
