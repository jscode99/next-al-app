export const mapTitleToRoutePath = data => {
  console.log("Data=====>", data);
  return data.toLowerCase().split(" ").join("-");
};

export const mapRoutePathToTitle = path => {
  console.log("Path=====>", path);
  return path.toLowerCase().split("-").join(" ");
};
