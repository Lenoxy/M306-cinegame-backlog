package ch.css.lernende.backendcinegamebacklog.service;

import ch.css.lernende.backendcinegamebacklog.entity.UserEntity;
import ch.css.lernende.backendcinegamebacklog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LoginService{
    private final UserRepository userRepository;

    @Autowired
    public LoginService(final UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Transactional(readOnly = true)
    public boolean login(final String username, final String password){
        UserEntity userEntity = userRepository.checkPassword(username, password);
        return userEntity != null;
    }
}

