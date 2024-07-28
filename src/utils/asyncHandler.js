// Purpose
// 
// The purpose of asyncHandler is to streamline error handling in Express.js route handlers.
// Without this, you would need to manually wrap each asynchronous route handler in a try-catch block
// to catch and handle errors.
// With asyncHandler, you can write cleaner route handlers without repetitive error-handling code.




const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}









// const asyncHandler = () => {}
// const asyncHandler = (fun) => {() => {}}
// const asyncHandler = (fun) => () =>{}
// const asyncHandler = (fun) => async () =>{}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             massage: error.massage
//         })
//     }
// }