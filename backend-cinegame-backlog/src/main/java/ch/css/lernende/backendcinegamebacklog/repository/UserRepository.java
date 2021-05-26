package ch.css.lernende.backendcinegamebacklog.repository;

import ch.css.lernende.backendcinegamebacklog.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);

}
