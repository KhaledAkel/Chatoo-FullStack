export const signUp = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
        const createdUser = await User.create({
        username: username,
        password: hashedPassword,
        });
        jwt.sign({ userId: createdUser._id, username }, jwtSecret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token, { sameSite: "none", secure: true }).status(201).json({
            id: createdUser._id,
        });
        });
    } catch (err) {
        if (err) throw err;
        res.status(500).json("error");
    }
    };

