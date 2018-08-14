var showerThoughts = [
    {
        id: 1,
        title: 'First Thought',
        body: 'I hope this worked out.'
    },
    {
        id: 2,
        title: 'Second Thought',
        body: 'I hope this worked out too.'
    },
    {
        id: 3,
        title: 'Third Thought',
        body: 'I hope this worked out too.'
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