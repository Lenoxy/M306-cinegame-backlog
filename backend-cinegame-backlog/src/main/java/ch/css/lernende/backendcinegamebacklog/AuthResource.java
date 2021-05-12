package ch.css.lernende.backendcinegamebacklog;

import ch.css.lernende.backendcinegamebacklog.dto.LoginInDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;


@RestController
@RequestMapping(path = "/auth")
public class AuthResource{

    PgAuthenticationProvider pgAuthenticationProvider;

    @Autowired
    public AuthResource(PgAuthenticationProvider pgAuthenticationProvider){
        this.pgAuthenticationProvider = pgAuthenticationProvider;
    }

    @PutMapping
    public String register(){
        return "Greetings from Spring Boot!";
    }

    @GetMapping
    @Transactional
    public String login(@RequestBody LoginInDto loginInDto){
        return null;
    }

    @PostMapping
    public String changePassword(){
        return "Greetings from Spring Boot!";
    }
}

