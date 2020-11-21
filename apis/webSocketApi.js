const mathOpsService = require('../services/mathOpsService');
const InvalidOperationError = require('../errors/InvalidOperationError');

exports.processMessage = (message) => {
    if (message.type === 'utf8') {
        return processUTF8(message);
    }
}

const processUTF8 = (message) => {
    const escapedMsg = escapeMessage(message.utf8Data);
    const splittedMsg = escapedMsg.split(' ');

    try {
        const result = mathOpsService.processOperation(splittedMsg[0], splittedMsg[2], splittedMsg[1]);
        return {status: 'success', content: result};
    } catch(error) {
        return {status: 'error', content: error.message};

    }
}

const escapeMessage = (message) => {
    return String(message)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}