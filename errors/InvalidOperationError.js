const ERR_INVALID_OPERATION = 'Invalid operation passed to service.';

class InvalidOperationError extends Error {
    constructor() {
        super(ERR_INVALID_OPERATION);
        this.status = 400;
    }

    getMessage() {
        return ERR_INVALID_OPERATION;
    }
}

exports.InvalidOperationError = InvalidOperationError;