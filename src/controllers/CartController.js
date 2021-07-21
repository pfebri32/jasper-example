const axios = require("axios").default;
const { User, Order, Product, Cart } = require("../../models");

exports.getCartById = async (req, res) => {
  const { id } = req.query;
  try {
    const cart = await Cart.findOne({
      include: [
        {
          model: Product,
          as: "products",
          through: {
            model: Order,
            as: "order",
          },
        },
        {
          model: User,
          as: "user",
        },
      ],
      where: {
        id: parseInt(id),
      },
    });

    if (!cart)
      res.status(404).send({
        message: "Cart is not exist.",
      });

    res.send({
      status: "Success",
      message: "Cart is exist.",
      data: {
        cart,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Oops! Something is error.",
    });
  }
};

exports.getTemplateB = async (req, res) => {
  const { id } = req.params;
  const url =
    "http://localhost:8080/jasperserver/rest_v2/reports/reports/TemplateB.pdf";
  try {
    const cart = await Cart.findOne({
      where: {
        id,
      },
    });

    if (!cart)
      res.status(404).send({
        message: "Error.",
      });

    const file = await axios.get(url + `?id=${id}`, {
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
    res.status(400).send({
      message: "Oops! Something is error.",
    });
  }
};

exports.getExampleA = async (req, res) => {
  const { id } = req.params;
  const urlJson =
    "http://localhost:8080/jasperserver/rest_v2/resources/reports/Example/ExampleA/ExampleA.json";
  const urlTemplate =
    "http://localhost:8080/jasperserver/rest_v2/reports/reports/Example/ExampleA/ExampleA.pdf";
  const auth = {
    username: "jasperadmin",
    password: "jasperadmin",
  };
  try {
    const cart = await Cart.findOne({
      include: [
        {
          model: Product,
          as: "products",
          through: {
            model: Order,
            as: "order",
          },
        },
        {
          model: User,
          as: "user",
        },
      ],
      where: {
        id,
      },
    });

    if (!cart)
      res.status(404).send({
        message: "Error.",
      });

    await axios.put(
      urlJson,
      {
        status: "Success",
        message: "Cart is exist.",
        data: {
          cart,
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

exports.getExampleB = async (req, res) => {
  const { id } = req.params;
  const urlTemplate =
    "http://localhost:8080/jasperserver/rest_v2/reports/reports/Example/ExampleB/ExampleB.pdf";
  const auth = {
    username: "jasperadmin",
    password: "jasperadmin",
  };
  try {
    const cart = await Cart.findOne({
      include: [
        {
          model: Product,
          as: "products",
          through: {
            model: Order,
            as: "order",
          },
        },
        {
          model: User,
          as: "user",
        },
      ],
      where: {
        id,
      },
    });

    if (!cart)
      res.status(404).send({
        message: "Error.",
      });

    const file = await axios.get(`${urlTemplate}?id=${id}`, {
      responseType: "stream",
      auth,
    });

    console.log(file);
    res.writeHead(200, { "Content-Type": "application/pdf" });
    file.data.pipe(res);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Oops! Something is error.",
    });
  }
};

exports.getContohJSON = async (req, res) => {
  const { id } = req.params;
  const urlJson =
    "http://localhost:8080/jasperserver/rest_v2/resources/reports/ContohJSON/ContohJSON.json";
  const urlTemplate =
    "http://localhost:8080/jasperserver/rest_v2/reports/reports/ContohJSON/ContohJSON.pdf";
  const auth = {
    username: "jasperadmin",
    password: "jasperadmin",
  };
  try {
    const cart = await Cart.findOne({
      include: [
        {
          model: Product,
          as: "products",
          through: {
            model: Order,
            as: "order",
          },
        },
        {
          model: User,
          as: "user",
        },
      ],
      where: {
        id,
      },
    });

    if (!cart)
      res.status(404).send({
        message: "Error.",
      });

    await axios.put(
      urlJson,
      {
        status: "Success",
        message: "Cart is exist.",
        data: {
          cart,
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

exports.getContohURL = async (req, res) => {
  const { id } = req.params;
  const urlTemplate =
    "http://localhost:8080/jasperserver/rest_v2/reports/reports/contohurl/ContohURL.pdf";
  const auth = {
    username: "jasperadmin",
    password: "jasperadmin",
  };
  try {
    const cart = await Cart.findOne({
      include: [
        {
          model: Product,
          as: "products",
          through: {
            model: Order,
            as: "order",
          },
        },
        {
          model: User,
          as: "user",
        },
      ],
      where: {
        id,
      },
    });

    if (!cart)
      res.status(404).send({
        message: "Error.",
      });

    const file = await axios.get(`${urlTemplate}?id=${id}`, {
      responseType: "stream",
      auth,
    });

    console.log(file);
    res.writeHead(200, { "Content-Type": "application/pdf" });
    file.data.pipe(res);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Oops! Something is error.",
    });
  }
};
