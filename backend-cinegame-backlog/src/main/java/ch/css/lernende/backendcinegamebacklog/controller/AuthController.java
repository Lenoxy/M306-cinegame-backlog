package ch.css.lernende.backendcinegamebacklog.controller;

import ch.css.lernende.backendcinegamebacklog.dto.LoginInDto;
import ch.css.lernende.backendcinegamebacklog.model.RoleModel;
import ch.css.lernende.backendcinegamebacklog.model.UserModel;
import ch.css.lernende.backendcinegamebacklog.service.auth.JWTAuthService;
import ch.css.lernende.backendcinegamebacklog.service.auth.RequestInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(path = "/api")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JWTAuthService jwtAuthService;

    @Autowired
    public AuthController(final AuthenticationManager authenticationManager, final JWTAuthService jwtAuthService) {
        this.authenticationManager = authenticationManager;
        this.jwtAuthService = jwtAuthService;
    }

    @PostMapping(path = "login")
    public ResponseEntity<UserModel> login(@RequestBody @Validated LoginInDto loginInDto) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginInDto.getUsername(), loginInDto.getPassword())
            );

            User user = (User) authentication.getPrincipal();

            return ResponseEntity.ok()
                    .header(
                                HttpHeaders.AUTHORIZATION,
                                jwtAuthService.createToken(user.getUsername(), user.getAuthorities())
                            )
                    .body(new UserModel(user.getUsername(), user.getPassword(), user.getAuthorities()));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping(path = "/public")
    @RolesAllowed(value = "VISITOR")
    public void publicAPI() {
        System.out.println("public");
    }

    @GetMapping(path = "/private")
    @RolesAllowed(value = "AUTHORIZED")
    public void privateAPI() {
        System.out.println("private");
    }


}
