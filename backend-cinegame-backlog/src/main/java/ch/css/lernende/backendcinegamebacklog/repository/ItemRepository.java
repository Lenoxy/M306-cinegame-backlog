package ch.css.lernende.backendcinegamebacklog.repository;

import ch.css.lernende.backendcinegamebacklog.entity.ItemEntity;
import ch.css.lernende.backendcinegamebacklog.entity.ListEntity;
import ch.css.lernende.backendcinegamebacklog.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemRepository extends JpaRepository<ItemEntity, Long>{
    ItemEntity findById(int id);

    @Query("SELECT i FROM ItemEntity i WHERE i.list.id = ?1")
    List<ItemEntity> findByListId(int id);

}
