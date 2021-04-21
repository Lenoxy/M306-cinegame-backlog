package ch.css.lernende.backendcinegamebacklog.entity;

import ch.css.lernende.backendcinegamebacklog.dto.LoginInDto;

import javax.persistence.*;

@Entity
@Table(name = "list_user")
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

    public LoginInDto toUserDto(){
        return new LoginInDto(
                passwordSHA256,
                username
        );
    }

    public int getId(){
        return id;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getPasswordSHA256(){
        return passwordSHA256;
    }

    public void setPasswordSHA256(String passwordSHA256){
        this.passwordSHA256 = passwordSHA256;
    }
}
