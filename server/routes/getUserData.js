const admin = require('firebase-admin')
module.exports = (app) => {
    app.post('/api/verifyAdmin', async (req, res) => {
        try {
            const jsonReq = req.body.data
            const email = jsonReq.email
            const user = await admin.auth().getUserByEmail(email)
            console.log(user)
            if (user) {
                res.status(200).send('User Found')
            } else {
                res.status(401).send({message:'Not Found'})
            }
        } catch (err) {
            res.status(401).send(err.message)
        }
    })
}