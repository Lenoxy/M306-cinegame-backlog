package ch.css.lernende.backendcinegamebacklog.service.auth;

import ch.css.lernende.backendcinegamebacklog.exception.UnauthorizedException;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class JWTAuthService {

    private static final String SECRET_KEY = "secret";
    private static final String ISSUER = "Cinegame-Backlog";
    private static final Algorithm ALGORITHM = Algorithm.HMAC256(SECRET_KEY);

    public DecodedJWT verifyToken(String token) throws UnauthorizedException {
        try {
            JWTVerifier verifier = JWT.require(ALGORITHM)
                    .acceptExpiresAt(3600)
                    .withIssuer(ISSUER)
                    .acceptLeeway(1).build();
            return verifier.verify(token);
        } catch (JWTVerificationException e) {
            throw new UnauthorizedException();
        }
    }

    public String createToken(String username, Collection<GrantedAuthority> authorities) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.HOUR_OF_DAY, 1);

        return JWT.create()
                .withIssuer(ISSUER)
                .withClaim("username", username)
                .withClaim("expiryDate", calendar.getTime())
                .withClaim("authority", new ArrayList<>(authorities))
                .sign(ALGORITHM);
    }


}
