const User = require('../models/user');
const bcrypt = require('bcrypt');

const getAll = async() => await User.find();
const getOne = async(id) => await User.findById(id);
const count = async() => await User.count();
const save = async(body) => {
    const user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });
    await user.save();
    return user;
}
const signin = async(email, password) => {
    let user = await User.findOne({ email: email });
    if (user && !bcrypt.compareSync(password, user.password)) {
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