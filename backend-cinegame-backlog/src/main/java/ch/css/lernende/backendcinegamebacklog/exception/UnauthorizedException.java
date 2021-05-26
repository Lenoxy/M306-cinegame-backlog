package ch.css.lernende.backendcinegamebacklog.exception;

public class UnauthorizedException extends Exception {

    public UnauthorizedException () {
        super("Access Denied");
    }

}
