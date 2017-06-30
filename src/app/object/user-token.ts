export class UserToken {
    username: string;
    loogedIn: string;
    account_status: string; /// see if accounnt is active or not
    role: string;
    last_seen: string;
    security_permit: string; // Admin will give permission to access API
    mail_token: string; //this one is for mail communication
}
