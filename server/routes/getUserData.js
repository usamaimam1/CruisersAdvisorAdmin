const admin = require('firebase-admin')
module.exports = (app) => {
    app.post('/api/verifyAdmin', async (req, res) => {
        try {
            const jsonReq = req.body.data
            const email = jsonReq.email
            const user = await admin.auth().getUserByEmail(email)
            if (user) {
                const dataSnapShot = await admin.database().ref('admins').child(user.uid).once('value')
                const isAdmin = dataSnapShot.val()
                if (isAdmin) {
                    res.status(200).send({ message: 'All OK' })
                } else {
                    res.status(401).send({ message: 'Not An Admin' })
                }
            } else {
                res.status(401).send({ message: 'Not Found' })
            }
        } catch (err) {
            res.status(401).send({ message: err.message })
        }
    })
}