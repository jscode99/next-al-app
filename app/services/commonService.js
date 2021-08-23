export function getBreadcrumData(router) {
  let path = router.pathname.split("/");
  let resultPathName = path.map((data) => {
    if (data.split("")[0] === "[") {
      let dataSplit = data.split("");
      let splitQueryName = dataSplit.filter(
        (value, index) => index !== 0 && index !== dataSplit.length - 1
      );
      let queryName = splitQueryName.join("");
      let query = router["query"];
      let path = query[queryName];
      return path.split("-").join(" ");
    }
    return data.split("-").join(" ");
  });
  return resultPathName;
}

export function paginationService(listData, listSize, pageNumber) {
  return listData.slice((pageNumber - 1) * listSize, listSize * pageNumber);
}

export function splitLetterNumberService(data) {
  return data.match(/[a-zA-Z$]+|[0-9]+(?:\.[0-9]+|)/g);
}
