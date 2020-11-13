app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});