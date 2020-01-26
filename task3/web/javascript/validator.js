// finds out whether input data is valid or not
class Validator {
    _EMAIL_PATTERN = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    _PASS_PATTERN = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,15}/g;
    _LOGIN_PATTERN = /[0-9a-zA-Z]{6,12}/;

    // validates a string by a type
    validate(line, type) {
        switch(type) {
            case 'login':
                if (!line.match(this._LOGIN_PATTERN)) {
                    return false;
                }
                return true;
            case 'email':
                if (!line.match(this._EMAIL_PATTERN)) {
                    return false;
                }
                return true;
            case 'password':
                if (!line.match(this._PASS_PATTERN)) {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
}
