const axios = require("axios").default;

exports.getDemo = async (req, res) => {
  const url =
    "http://localhost:8080/jasperserver/rest_v2/reports/reports/Demo/demo.pdf?name=dariserver";
  try {
    const file = await axios.get(url, {
      responseType: "stream",
      auth: {
        username: "jasperadmin",
        password: "jasperadmin",
      },
    });
    res.writeHead(200, { "Content-Type": "application/pdf" });
    file.data.pipe(res);
  } catch (error) {
    console.log(error);
  }
};

exports.demo = (req, res) => {
  const { name } = req.query;
  console.log(name);
  res.send({
    name: typeof name !== "undefined" && name ? name : "Febriansyah Putra",
  });
};
