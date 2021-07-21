const { default: axios } = require("axios");
const { User } = require("../../models");

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id },
    });

    if (!user)
      res.status(404).send({
        message: "User is not exist.",
      });

    res.send({
      status: "Success",
      message: "User is exist.",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Oops! Something is error.",
    });
  }
};

exports.getTemplateA = async (req, res) => {
  const { id } = req.params;
  const urlJson =
    "http://localhost:8080/jasperserver/rest_v2/resources/reports/TemplateA_Data.json";
  const urlTemplate =
    "http://localhost:8080/jasperserver/rest_v2/reports/reports/TemplateA.pdf";
  const auth = {
    username: "jasperadmin",
    password: "jasperadmin",
  };
  try {
    const user = await User.findOne({
      where: { id },
    });

    if (!user)
      res.status(404).send({
        message: "Error.",
      });

    await axios.put(
      urlJson,
      {
        status: "Success",
        message: "User is exist.",
        data: {
          user,
        },
      },
      {
        auth,
      }
    );

    const file = await axios.get(urlTemplate, {
      responseType: "stream",
      auth,
    });

    res.writeHead(200, { "Content-Type": "application/pdf" });
    file.data.pipe(res);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Oops! Something is error.",
    });
  }
};
