module.exports = (options, app) => {
    return async function printDate(ctx, next) {
        // console.log(options.time)
        await next();
    }
}