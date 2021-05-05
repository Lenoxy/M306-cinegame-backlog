package ch.css.lernende.backendcinegamebacklog.service;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Component
public class DatabaseService{
    @PersistenceContext
    public EntityManager entityManager;
}
