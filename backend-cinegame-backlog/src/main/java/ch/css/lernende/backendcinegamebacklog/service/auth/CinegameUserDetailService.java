package ch.css.lernende.backendcinegamebacklog.service.auth;

import ch.css.lernende.backendcinegamebacklog.entity.UserEntity;
import ch.css.lernende.backendcinegamebacklog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CinegameUserDetailService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public CinegameUserDetailService(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = this.userRepository.findByUsername(username);
        return new User(userEntity.getUsername(), userEntity.getPasswordSHA256(), new ArrayList<>());
    }
}
