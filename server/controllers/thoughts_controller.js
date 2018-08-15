var showerThoughts = [
    {
        id: 1,
        title: 'Uninostril',
        body: 'What if we only had one giant nostril?'
    },
    {
        id: 2,
        title: 'Sheet Music',
        body: 'Sheet music is basically just a sound recipe.'
    },
    {
        id: 3,
        title: 'Sleep',
        body: 'You have to pretend to sleep in order to sleep.'
    },
];

var id = 4;

module.exports = {

    newThought: (req, res) => {
        const { title, body } = req.body;
        showerThoughts.push({ id, title, body });
        id++;
        res.status(200).send(showerThoughts);
    },
    getThoughts: (req, res) => {
        res.status(200).send(showerThoughts);
    },
    updateThought: (req, res) => {
        const updateID = req.params.id;
        let updateIndex = showerThoughts.findIndex(thought => thought.id == updateID)
        showerThoughts[updateIndex] = req.body;
        res.status(200).send(showerThoughts);
    },
    deleteThought: (req, res) => {
        const deleteID = req.params.id;
        let deleteIndex = showerThoughts.findIndex(thought => thought.id == deleteID)
        showerThoughts.splice(deleteIndex, 1);
        res.status(200).send(showerThoughts);
    }

}