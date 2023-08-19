exports.User = (req, res) => {
  if (req.method == "get") {
    res.json([{ name: "username" }, { id: 1234563 }]);
  }else{
    
  }
};
