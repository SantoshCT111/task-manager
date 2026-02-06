const logger = (req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    
    // This is the most important part!
    next(); 
};

module.exports = logger;