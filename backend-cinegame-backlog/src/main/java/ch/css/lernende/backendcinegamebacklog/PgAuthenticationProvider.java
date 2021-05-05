package ch.css.lernende.backendcinegamebacklog;

import ch.css.lernende.backendcinegamebacklog.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@Component
public class PgAuthenticationProvider implements AuthenticationProvider{

    private final LoginService loginService;

    @Autowired
    public PgAuthenticationProvider(final LoginService loginService){
        this.loginService = loginService;
    }

    @Override
    public Authentication authenticate(final Authentication authentication) throws AuthenticationException{

        final String username = authentication.getName();
        final String password = authentication.getCredentials().toString();

        if(loginService.login(username, password)){
            return new UsernamePasswordAuthenticationToken(
                    username,
                    password
            );
        }
        return null;
    }

    @Override
    public boolean supports(final Class<?> authentication){
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}

