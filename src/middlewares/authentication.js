import jwt from 'jsonwebtoken';

const authentication = async (req, res, next) => {
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBvbmNlQGdtYWlsLmNvbSIsImlhdCI6MTY2MzgxOTI3OSwiZXhwIjoxNjYzODI2NDc5fQ.55U1waGpZ2jqYIhO5VBi-LtJy4z04UN21QaYHvgRVLo";
        if (token) {
            let decodedData = jwt.verify(token, "secret");
            console.log(decodedData);
        }
        next();
    } catch (error) {
        console.log(error.message);
        return res.json({ mensaje: "No esta autenticado"});
    }
};

export default authentication;