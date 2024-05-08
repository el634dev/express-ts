import {Express, Request, Response, NextFunction } from "express";


function routes(app: Express) {
    // ----------------------
    // Error Handling
    async function throwsError() {
        throw new Error("Not found!");
    };

    // Async error handling
    app.get("/error", async (res: Response, req: Request) => {
        try {
            await throwsError();
            res.sendStatus(200);
        } catch(e) {
            res.status(400).send("Something went wrong");
        }
    });

    // ----------------------
    // Routes
    app.get("/web", (req: Request, res: Response) => {
        return res.redirect("https://bing.com")
        // return res.json({
        //     success: true,
        //     name: "Obi Wan-Kenobi"
        // })
    });

    app.post("/api/data", (req: Request, res: Response)=> {
        console.log(req.body);
        return res.sendStatus(200);
    })
}

module.exports = routes;
