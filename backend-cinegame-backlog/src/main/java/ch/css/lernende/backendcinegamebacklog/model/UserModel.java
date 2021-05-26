package ch.css.lernende.backendcinegamebacklog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class UserModel {
    private String username;
    private String password;
    private Collection<GrantedAuthority> role;
}
