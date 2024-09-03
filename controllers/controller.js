const tracker = require("../models/transaction");

const defaultController = async (req, res) => {
    const defData = await tracker.find({});
    console.log("defData", defData);
    
    res.render('index.ejs',{todos: defData});
}
const todoApp = async (req, res) => {


    const data = {
        type: req.body.type,
        category: req.body.category,
        amount: req.body.amount,
        description: req.body.description,
        date: req.body.date
    }

    const datamodelObj = new tracker(data);
    await datamodelObj.save();
    console.log("todom", datamodelObj);

    res.redirect('/')
}


const editTodoController = async(req, res) =>{   

    const {id}= req.params; 
    console.log("editeID", id);

    const editeData = await tracker.findOne({ _id: id });

    console.log("editeData", editeData);

    res.render("addtransaction", { editeData });
}

const updateTodo = async(req, res) => {

    // let { id } = req.params;
    // console.log(req.body);

    // const updateData = volunteerStorage.find((todo) => {
    //     return todo.id = id;
    // })

    // updateData.fullname = req.body.fullname;
    // updateData.username = req.body.username;
    // updateData.email = req.body.email;
    // updateData.phoneno = req.body.phoneno;
    // updateData.password = req.body.password;


    // console.log("Update Data", updateData);

    // res.redirect('/');

    const {id} = req.body;

    const updateData = await tracker.findByIdAndUpdate({_id : id},  {title : req.body.title}, {new : true});

    console.log("updateTodo", updateData);
        
    res.redirect("/");
}

const deleteVolTood = async(req , res) => {

    // const {id} = req.params;

    // const deletevot = volunteerStorage.filter((delEle) => {
    //     return delEle.id != id;
    // })

    // volunteerStorage = deletevot;
    // console.log("deletevot", volunteerStorage);
    
    // res.redirect('/');

    const {id} = req.body;
    console.log("DeleteID", id);
    
const deleteData = await tracker.findByIdAndDelete(req.params.id);

    console.log("deleteData", deleteData);

    res.redirect("/");
}


module.exports = { defaultController, todoApp, editTodoController,updateTodo, deleteVolTood };