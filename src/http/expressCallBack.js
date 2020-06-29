module.exports = function expressCallBack(controller) {
    try {
        return (req, res) => {
            controller(req, res) 
        }
    } catch (errro) {
        console.log(error);
    }
}