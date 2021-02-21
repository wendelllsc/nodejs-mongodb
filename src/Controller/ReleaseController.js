const releaseModel = require('../Model/Release');

module.exports = {
    async create(req, res){
        const { value, releaseType, origin } = req.body;
        await releaseModel.create({ value, releaseType, origin });
        res.send('Success!');
    },

    async all(req, res){
        const releases = await releaseModel.find()
        res.send(releases);
    }
}