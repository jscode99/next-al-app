export function getBreadcrumData(router, title) {
  console.log("pathname testing--->" + router.pathname.split("/"));
  let path = router.pathname.split("/");
  if (path.length > 2) {
    let resultPathName = path.map((data) => {
      console.log("Testing Data--->",typeof data)
      if (data.split("")[0] === "[") {
        // let dataSplit = data.split("");
        // let splitQueryName = dataSplit.filter(
        //   (value, index) => index !== 0 && index !== dataSplit.length - 1
        // );
        // let queryName = splitQueryName.join("");
        // let query = router["query"];
        // let path = query[queryName];
        return title.split("-").join(" ");
      }
      return data.split("-").join(" ");
    });
    console.log("Result--->",resultPathName);
    return resultPathName;
  } else {
  let resultPathName = path.map((data) => {
    if (data.split("")[0] === "[") {
      let dataSplit = data.split("");
      let splitQueryName = dataSplit.filter(
        (value, index) => index !== 0 && index !== dataSplit.length - 1
      );
      let queryName = splitQueryName.join("");
      let query = router["query"];
      let path = query[queryName];
      console.log("splitQueryName: " + path);

      return path.split("-").join(" ");
    }
    return data.split("-").join(" ");
  });
  console.log("Result--->", resultPathName);
  return resultPathName;
  }
}

export function paginationService(listData, listSize, pageNumber) {
  return listData.slice((pageNumber - 1) * listSize, listSize * pageNumber);
}

export function splitLetterNumberService(data) {
  // console.log("data", data);
  return data.match(/[a-zA-Z$]+|[0-9]+(?:\.[0-9]+|)/g);
}

export function stringToNumberConverter(data) {
  return data && parseFloat(data.match(/\d+/g))
    ? parseFloat(data.match(/\d+/g).join(""))
    : data;
}
