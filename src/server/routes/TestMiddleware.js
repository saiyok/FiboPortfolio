const getTime = (req, res, next) => {
    T = new Date();
    req.Time = T.toDateString();
    console.log('From ' + T.now() + ' to ' + req.Time);
    next();
};

const cookieValidator = (req, res, next) => {
    try {
        await externallyValidateCookie(req.cookies.testCookie);
    }catch{
        throw new Error('Invalid cookies');
    }
    next();
};

module.exports = {getTime, cookieValidator};