package ch.css.lernende.backendcinegamebacklog.repository;

import ch.css.lernende.backendcinegamebacklog.entity.ListEntity;
import ch.css.lernende.backendcinegamebacklog.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListRepository extends JpaRepository<ListEntity, Long>{
    ListEntity findById(int id);

}
