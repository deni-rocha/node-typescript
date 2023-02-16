import express, { Request, Response, Router } from "express"
import * as dotenv from "dotenv"

// configurações
const app = express()
const router = Router()
dotenv.config()

app.use(express.json())
app.use(router)

// rotas
router.get("/", (_req: Request, res: Response) => {
  res.send({
    mensagem: "template node com typescript",
  })
})

// servidor
const porta = process.env.PORT || 3030
app.listen(porta, () => console.log("http://localhost:8080"))
