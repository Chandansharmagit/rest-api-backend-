const { model } = require("mongoose");
const models = require("../database/models/products");

const getallproducts = async (req, res) => {
  const { company, name,featured ,sort} = req.query;
  const queryobjects = {};

  if (company) {
    queryobjects.company = company;
  }

  if (name) {
    queryobjects.name = { $regex: name, $options: "i" };
  }


  let apidata = models.find(queryobjects)
  if(sort){
    let sortlist = sort.replace(","," ");
    apidata = apidata.sort(sortlist)
  }

  if(featured){
    queryobjects.featured = featured;
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 4;

  let skip = (page -1 ) * limit;

  apidata = apidata.skip(skip).limit(limit);





  const mydata = await apidata;
  res.status(200).json({ mydata });
};

const getallproductstesting = async (req, res) => {
    console.log(req.query);
  const mydatas = await models.find(req.query);

  
  console.log(req.query);

  res.status(200).json({ mydatas ,nHbits: mydatas.length});
};

module.exports = {
  getallproducts,
  getallproductstesting,
};
