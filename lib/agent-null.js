class NullAgent {
    jar = {
        getCookieStringSync(_) {
            return '';
        }
    }

    dispatcher = undefined;
}

exports.defaultAgent = new NullAgent;