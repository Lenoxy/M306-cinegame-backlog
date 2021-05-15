package ch.css.lernende.backendcinegamebacklog.dto.auth;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginContainer{
    private String username;
    private String password;

    public LoginContainer(String username, String password){
        this.username = username;
        this.password = password;
    }
}
