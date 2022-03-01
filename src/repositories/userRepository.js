const User = require('../models/user');

const getAll = async() => await User.find();
const getOne = async(id) => await User.findById(id);
const count = async() => await User.count();
const save = async(body) => {
    const user = new User({
        name: body.name,
        email: body.email,
        password: body.password
    });
    await user.save();
    return user;
}
const signin = async(email, password) => {
    let user = await User.findOne({ email: email });
    if (user && user.password !== password) {
        user = null;
    }
    return user;
}

module.exports = {
    getAll,
    getOne,
    count,
    save,
    signin
}