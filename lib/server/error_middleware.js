module.exports = function(errorHandler){
    return function(err, req, res, next) {

        if (err.name && err.name == 'ValidationError') {
            res.status(400);
        } else {
            res.status(err.status || 500);
        }

        err.timeStamp = Date.now();
        err.url = req.url;
        err.body = req.body;
        err.query = req.query;
        err.headers = req.headers;

       // err.res = res;
        errorHandler.notify(err, function(err, url) {
            console.log(err,url);
            if (err) throw err;
        });

        res.json(err);
    }
}

