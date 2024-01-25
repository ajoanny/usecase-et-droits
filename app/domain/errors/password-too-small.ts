export default class PasswordTooSmall extends Error {
    constructor() {
        super('Password must be at least 8 characters long');
    }

}