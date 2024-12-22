const prisma = require('../config/prisma');

exports.createtodo = async (req, res) => {
    try {
        const { title, status } = req.body;
        const newTodo = await prisma.todo.create({
            data: {
                title: title,
                status: status === 'true',
            }
        });
        res.json({ newTodo });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({ error: error.message || 'Something went wrong' });
    }
};
exports.list = async (req,res) =>{
    const todolist = await prisma.todo.findMany();
    res.json({todolist});
}
exports.update = async (req, res) => {
    const { id } = req.params;
    const { title, status } = req.body;
    try {
        // ตรวจสอบว่า status เป็น Boolean
        const parsedStatus = status === "true" ? true : status === "false" ? false : status;

        const updatedTodo = await prisma.todo.update({
            where: {
                id: Number(id),
            },
            data: {
                title: title,
                status: parsedStatus,
            },
        });
        res.json({ updatedTodo });
    } catch (error) {
        console.log(error); // ให้รายละเอียดข้อผิดพลาดในคอนโซล
        res.status(500).json({ error: "Something went wrong" });
    }
};
exports.remove = async (req,res) =>{
    try {
        const { id } = req.params
        const deleteTodo = await prisma.todo.delete({
            where: {
                id: Number(id)
            }
        })
        res.json({deleteTodo})
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({ error: error.message || 'Something went wrong' });
    }
    
}