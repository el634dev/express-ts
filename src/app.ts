import express, { Request, Response, NextFunction } from "express";
import { Express } from "express-serve-static-core";
import helmet from "helmet";
import getBookHandler from './controllers/books.controller';

const app = express();

app.use(express.json());
app.use(helmet());
// app.use(express.urlencoded({ extended: true }))

// ----------------------
// Testing helmet
app.get("/", (req, res) => res.sendStatus(200));

// ----------------------
// Using next
function handleGetBook_1(req: Request, res: Response, next: NextFunction) {
    // Can do as a callback in the route
    console.log(req.params.bookId);
    next();
}

// ----------------------
// Dynamic Routes
// Can do function(){}, function(){} -> Splits seperate functions
app.get("api/books/:booksId/:authorId", [handleGetBook_1, getBookHandler]);

// ----------------------
// Using Middleware
function middleware(req: Request, res: Response, next: NextFunction) {
    res.locals.name = name;
    // Can move to the next piece of the request
    next();
}

// Can create a local middleware using [] or global middlware by doing app.use(middleware);
// Can create a custom middleware using currying by returning a function, ({name}:{name:string}) => and 
// then pass it to the global middleware 
app.get("api/books/:booksId/:authorId", middleware, (req: Request, res: Response, next: NextFunction) => {
    console.log(res.locals.name = name);
    // @ts-ignore
    res.send(req.name);
    next();
});
// app.use(middleware({ name: 'Skywalker'}));

routes(app);

// ----------------------
// Patterns
app.get("/health", (req, res) => res.sendStatus(200));
app.get("/test", (req, res) => res.send("/test"));
app.get("/abc/", (req, res) => res.send("/abc/"));

// ----------------------
// Chaining Requests
app.route("/")
.get((req: Request, res: Response) => {
    return res.send("You made a request")
}).post((req: Request, res: Response) => {
    return res.send("You made a second request")
}).put((req: Request, res: Response) => {
    return res.send("You made a third request")
}).all((req: Request, res: Response) => {
    return res.send("You made a fourth request")
})

// ----------------------
// Port
app.all('/api/all',(req: Request, res: Response) => {
    return res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("App listening at http://localhost:3000")
});
function routes(app: Express) {
    throw new Error("Function not implemented.");
}

