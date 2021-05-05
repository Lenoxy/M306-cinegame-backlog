package ch.css.lernende.backendcinegamebacklog;

import ch.css.lernende.backendcinegamebacklog.dto.LoginInDto;
import ch.css.lernende.backendcinegamebacklog.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;


@RestController
@RequestMapping(path = "/auth")
@PreAuthorize("isAuthenticated()")
public class AuthResource{

    @Autowired
    final EntityManager entityManager;

    public AuthResource(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    @PutMapping
    public String register(){
        return "Greetings from Spring Boot!";
    }

    @GetMapping
    @Transactional
    public String login(@RequestBody LoginInDto loginInDto){

        System.out.println(loginInDto.getUsername());
        entityManager.persist(new UserEntity(0, loginInDto.getUsername(), loginInDto.getPassword()));
        return "Greetings from Spring Boot!";
    }

    @PostMapping
    public String changePassword(){
        return "Greetings from Spring Boot!";
    }
}

