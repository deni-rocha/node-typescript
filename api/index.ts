import express, { Request, Response, Router } from "express"

const app = express()
const router = Router()

app.use(express.json())
app.use(router)

router.get("/", (req: Request, res: Response) => {
  req
  res.send({
    mensagem: "funcionando paeh",
  })
})
app.listen(8080, () => console.log("http://localhost:8080"))
