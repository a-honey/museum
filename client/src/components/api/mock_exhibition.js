const mock_exhibition = async () => {
  const KEY = "48716c5a676a6168313874484b7068";
  const URL = `http://openapi.seoul.go.kr:8088/${KEY}/xml/ListExhibitionOfSeoulMOAInfo/1/10/`;

  const response = await fetch(URL);
  const data = await response.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(data, "text/xml");
  const rowsHTML = xmlDoc.querySelectorAll("row");
  const rows = Array.from(rowsHTML).map((row) => ({
    name: row.querySelector("DP_NAME").textContent,
    place: row.querySelector("DP_PLACE").textContent,
    start: row.querySelector("DP_START").textContent,
    end: row.querySelector("DP_END").textContent,
    artPart: row.querySelector("DP_ART_PART").textContent,
    artist: row.querySelector("DP_ARTIST").textContent,
    imgUrl: row.querySelector("DP_MAIN_IMG").textContent,
    info: row.querySelector("DP_INFO").textContent,
  }));
  return rows;
};

export default mock_exhibition;
