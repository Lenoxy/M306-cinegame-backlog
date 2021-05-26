package ch.css.lernende.backendcinegamebacklog.service.auth;

import ch.css.lernende.backendcinegamebacklog.exception.UnauthorizedException;
import ch.css.lernende.backendcinegamebacklog.model.UserModel;
import ch.css.lernende.backendcinegamebacklog.model.mapper.UserMapper;
import ch.css.lernende.backendcinegamebacklog.repository.UserRepository;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class RequestInterceptor extends OncePerRequestFilter {

    private final JWTAuthService jwtAuthService;
    private final UserRepository userRepository;

    @Autowired
    public RequestInterceptor(final JWTAuthService jwtAuthService, final UserRepository userRepository) {
        this.jwtAuthService = jwtAuthService;
        this.userRepository = userRepository;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        final String header = httpServletRequest.getHeader(HttpHeaders.AUTHORIZATION);
        if (header == null || header.isEmpty() || !header.startsWith("Bearer ")) {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
            return;
        }

        final DecodedJWT token;
        try {
            token = jwtAuthService.verifyToken(header);
        } catch (UnauthorizedException e) {
            e.printStackTrace();
            return;
        }

        // TODO: Implement proper Role
        UserModel userModel = UserMapper.toUserModel(userRepository.findByUsername(token.getClaim("username").asString()));
        UserDetails userDetails = new User(userModel.getUsername(), userModel.getPassword(), new ArrayList<>());

        UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

        authentication.setDetails(
                new WebAuthenticationDetailsSource().buildDetails(httpServletRequest)
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        filterChain.doFilter(httpServletRequest, httpServletResponse);

    }
}
