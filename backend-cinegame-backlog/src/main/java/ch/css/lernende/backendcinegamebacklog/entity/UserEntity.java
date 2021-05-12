package ch.css.lernende.backendcinegamebacklog.entity;

import ch.css.lernende.backendcinegamebacklog.dto.auth.LoginContainer;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Table(name = "cinegame_user")
@Getter
public class UserEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String passwordSHA256;

    public UserEntity(){
    }

    public UserEntity(int id, String username, String passwordSHA256){
        this.id = id;
        this.username = username;
        this.passwordSHA256 = passwordSHA256;
    }

    public LoginContainer toUserDto(){
        return new LoginContainer(
                passwordSHA256,
                username
        );
    }

}
