export const mapTitleToRoutePath = data => {
  // console.log("data", data);
  return data.toLowerCase().split(" ").join("-");
};

export const mapRoutePathToTitle = path => {
  // console.log("path", path);
  return path.toLowerCase().split("-").join(" ");
};

export const mapRoutePathToTitleAR = path => {
  // console.log("pathhhhhh Ar", path);
  return path.split("-").join(" ");
};
