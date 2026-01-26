import ErrorHandler from "../error/error.js";

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    // Handle JSON Parse errors (SyntaxError) from express.json()
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            success: false,
            message: "Invalid JSON format in request body. Check for missing quotes or syntax errors.",
        });
    }

    if(err.name === 'JsonWebTokenError'){
        const message = "Json Web Token is invalid, Try again!";
        err = new ErrorHandler(message, 400);
    }
    if(err.name === 'TokenExpiredError'){
        const message = "Json Web Token is expired, Try again!";
        err = new ErrorHandler(message, 400);
    }
    if(err.name === 'CastError'){
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    const errorMessage = err.errors 
        ? Object.values(err.errors).map((error) => error.message).join(" ")
        : err.message;

    return res.status(err.statusCode).json({
        success: false,
        message: errorMessage,
    });
};

export default errorMiddleware;
