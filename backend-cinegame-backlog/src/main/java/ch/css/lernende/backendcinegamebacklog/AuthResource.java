package ch.css.lernende.backendcinegamebacklog;

import ch.css.lernende.backendcinegamebacklog.dto.auth.LoginContainer;
import ch.css.lernende.backendcinegamebacklog.entity.ItemEntity;
import ch.css.lernende.backendcinegamebacklog.entity.ListEntity;
import ch.css.lernende.backendcinegamebacklog.entity.UserEntity;
import ch.css.lernende.backendcinegamebacklog.entity.type.ListType;
import ch.css.lernende.backendcinegamebacklog.repository.ItemRepository;
import ch.css.lernende.backendcinegamebacklog.repository.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Collections;


@RestController
@RequestMapping(path = "/auth")
public class AuthResource{

    final EntityManager entityManager;
    private final ListRepository listRepository;
    private final ItemRepository itemRepository;

    @Autowired
    public AuthResource(EntityManager entityManager, ListRepository listRepository, ItemRepository itemRepository){
        this.entityManager = entityManager;
        this.listRepository = listRepository;
        this.itemRepository = itemRepository;
    }

    @PutMapping
    public String register(){
        return "Greetings from Spring Boot!";
    }

    @GetMapping
    @Transactional
    public String login(@RequestBody LoginContainer LoginContainer){

        System.out.println(LoginContainer.getUsername());
        entityManager.persist(new UserEntity(0, LoginContainer.getUsername(), LoginContainer.getPassword()));
        return "Greetings from Spring Boot!";
    }

    @GetMapping("/test")
    @Transactional
    // Leaving this here as an example
    // TODO: Remove
    public Object test(){
        ItemEntity itemEntity = new ItemEntity();
        itemEntity.setTitle("test");

        ListEntity listEntity = new ListEntity();
        listEntity.setType(ListType.GAME);
        listEntity.setItems(Collections.singletonList(itemEntity));

        listRepository.save(listEntity);

        return itemRepository.findByListId(1);
    }

    @PostMapping
    public String changePassword(){
        return "Greetings from Spring Boot!";
    }
}

