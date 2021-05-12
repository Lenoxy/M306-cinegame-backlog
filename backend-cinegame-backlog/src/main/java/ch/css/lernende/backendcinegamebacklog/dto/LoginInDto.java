package ch.css.lernende.backendcinegamebacklog.dto;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginInDto{
    private String username;
    private String password;

    public LoginInDto(String username, String password){
        this.username = username;
        this.password = password;
    }
}
