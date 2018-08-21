module.exports = app => {
  app.get("/", (req, res, next) =>
    res.send({
      hello: "che kardi e bacha?"
    })
  );
  app.post("/post");
};
