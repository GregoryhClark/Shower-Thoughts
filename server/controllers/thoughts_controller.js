var showerThoughts = [{
    id: 1,
    title: 'First Thought',
    body: 'I hope this worked out.'
}];

var id = 1;

module.exports = {

    newThought: (req, res) => {
        const { title, body } = req.body;
        showerThoughts.push({ title, body });
        id++;
        res.status(200).send(showerThoughts);
    },
    getThoughts: (req, res) => {
        res.status(200).send(showerThoughts);
    },
    updateThought: (req, res)=>{
        const updateID = req.params.id;
        let updateIndex = showerThoughts.findIndex(thought => thought.id === updateID)
        showerThoughts[updateIndex] = req.body;
        res.status(200).send(showerThoughts);
    },
    deleteThought: (req, res) => {
        const deleteID = req.params.id;
        let deleteIndex = showerThoughts.findIndex(thought => thought.id === deleteID)
        showerThoughts.splice(deleteIndex, 1);
        res.status(200).send(showerThoughts);
    }

}