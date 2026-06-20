import userSchema from '../model/schema.js'

const sinIn = async(req, res, () => {
    const { name, email, password } = req.body

    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(409).json({ error: `name, email and password are required` })

        }

        //middle ware

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({ error: `user all ready existing` })
        }

        //sev data 
        const user = new User({ name, email, password })
        await.save()
        res.status(201).json({ message: `User registered successfully` })

    } catch (error) {
        console.error(`ingUp error:`, error)
        res.status(500).json({ error: `internal server error` })
    }

})



export { }
