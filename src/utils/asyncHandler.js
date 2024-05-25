const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// for try catch method
// const asyncHandler = (fn) => async (req, res, next) =>{
//     try {
//         await fn();
//     } catch (error) {
//         res.status(err.code || 500).json({
//             message: err.message,
//             success: false
//         })
//     }
// }
