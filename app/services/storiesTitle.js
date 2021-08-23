export const mapTitleToRoutePath = data => {
  console.log("data", data);
  return data.Title.toLowerCase().split(" ").join("-");
};

export const mapRoutePathToTitle = path => {
  console.log("path", path);
  return path.toLowerCase().split("-").join(" ");
};

export const mapRoutePathToTitleAR = path => {
  return path.split("-").join(" ");
};
