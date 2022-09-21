import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const create = async(req, res) => {    
    try{
    const { characterId, movieId } = req.body;
    if (!(characterId && movieId)) {
    return res.status(400).send("All input is required");
    }
    const createCharacterOnMovie= await prisma.charactersOnMovies.create({
        data:{    
            characterId: characterId,
            movieId: movieId
        }
    })
        return res.status(201).json({
        data: createCharacterOnMovie,
        info: "Characters on movies created",
    });
    } catch (err) {
        console.log(err);
        return res.json({
            info: "Maybe don't exist that character ID or movie ID",
            data: err.message
        })
    }
}
export const readAll = async(req, res) =>{
    try{
        const findAll = await prisma.charactersOnMovies.findMany()
        return res.json(findAll)
    }catch (err) {
        console.log(err);
        return res.json({
            info: err.message
        })
      }
}

export const readOne = async(req, res) =>{
    try{
        const { id } = req.params
        const findOne = await prisma.charactersOnMovies.findUnique({
            where: {
                id: Number(id),
            }
        })
        return res.json(findOne)
    }catch (err) {
        console.log(err);
        return res.json({
            info: "Can't read that register"
        })
      }
}

export const deleteOne = async(req, res) =>{
    try{
        const { id } = req.params
        const deleteCharacterOnMovie = await prisma.characterOnMovie.delete({
            where: {
                id: Number(id),
            },
        })
        return res.json({
            info:"Characters on movies deleted",
            data: deleteCharacterOnMovie
            
        })
    }catch (err) {
        console.log(err);
        return res.json({
            info: "Characters on movie already deleted"
        })
      }
}