package ch.css.lernende.backendcinegamebacklog.service;

import org.springframework.context.annotation.Bean;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class DatabaseService{
    @PersistenceContext
    EntityManager entityManager;

    @Bean
    public EntityManager entityManagerBean(){
        return entityManager;
    }
}
