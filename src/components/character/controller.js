import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const create = async(req, res) => {    
    try{
    const { image, name, date_birth, weight, history } = req.body;
    if (!(image && name && date_birth && weight && history)) {
    return res.status(400).send("All input is required");
    }
    const createCharacter = await prisma.character.create({
        data:{
            image,     
            name,    
            date_birth: new Date(date_birth),
            weight,     
            history,   
 
        }
    })
    return res.status(201).json({
        data: createCharacter,
        info: "Character created",
    });
    } catch (err) {
        console.log(err);
    }
}
export const readAll = async(req, res) =>{
    try{
        const findAll = await prisma.character.findMany({
            select:{
                image: true,
                name: true
            }
        })
        return res.json(findAll)
    }catch (err) {
        return res.json({
            error: err.message
        })
      }
}
export const readOne = async(req, res) =>{
    try{
        const { id } = req.params
        const findOne = await prisma.character.findUnique({
            where: {
                id: Number(id),
            }
        })
        return res.json(findOne)
    }catch (err) {
        console.log(err);
        return res.json({
            info: "Can't read that character",
            error: err.message
        })
      }
}
export const update = async(req, res) =>{
    try{
        const { id } = req.params
        const { image, name, date_birth, weight, history } = req.body;
        const updateCharacter = await prisma.character.update({
            where: {
                id: Number(id),
            },
            data: {
                image: image, 
                name: name,
                date_birth: new Date(date_birth),
                weight: weight,
                history: history 
            },
        })
        return res.json(updateCharacter)
    }catch (err) {
        console.log(err);
        return res.json({
            info: "Can't update character",
            error: err.message
        })
      }
}
export const deleteOne = async(req, res) =>{
    try{
        const { id } = req.params
        const deleteCharacter = await prisma.character.delete({
            where: {
                id: Number(id),
            },
        })
        return res.json({
            info:"Character deleted",
            data: deleteCharacter
            
        })
    }catch (err) {
        console.log(err.message);
        return res.json({
            info: "Character already deleted",
        })
      }
}