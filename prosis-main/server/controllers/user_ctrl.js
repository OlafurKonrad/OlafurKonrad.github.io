const User = require("../models/user_model");

const { UserModel } = User;

/* Create a new user */
const createUser = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        });
    }

    const user = new UserModel(body);

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            console.log("User Created\n", user);
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            });
        })
};

const getUserById = async (req, res) => {

    await UserModel.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` });
        }
        console.log("User Found\n", user);
        return res.status(200).json({ success: true, user });
    }).catch(err => console.log(err));
};

// const getUserByPath = async (req, res) => {
//     console.log("PATH SERVER")
//     await User.findOne({ uniquePath: req.params.id }, (err, user) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!user) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `User not found` });
//         }
//         console.log("User Found\n", user);
//         return res.status(200).json({ success: true, user });
//     }).catch(err => console.log(err));
// };

const updateUser = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user to update',
        });
    }

    UserModel.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({ err, message: "User not found!" });
        }

        for (const item in body) {
            user[item] = body[item];
        };

        user
            .save()
            .then(() => {
                console.log("User Updated\n", user);
                return res.status(200).json({
                    success: true,
                    user: user,
                    message: "User updated!",
                });
            })
            .catch(error => {
                return res.status(404).json({ error, message: "User not updated!" });
            })
    });
};

// const deleteUser = async (req, res) => {
//     await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!user) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `User not found` })
//         }

//         return res.status(200).json({ success: true, data: user })
//     }).catch(err => console.log(err))
// };



module.exports = {
    createUser,
    getUserById,
    updateUser,
    // getUserByPath,
    // deleteUser,
};