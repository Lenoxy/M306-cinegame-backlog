package ch.css.lernende.backendcinegamebacklog.entity;

import ch.css.lernende.backendcinegamebacklog.entity.type.ListType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@Entity
@Table(name = "cinegame_list")
public class ListEntity{
    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "type")
    private ListType type;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore // Needed to break recursion
    private UserEntity owner;

    @OneToMany(
            mappedBy = "list",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    List<ItemEntity> items = new ArrayList<>();

    public void setItems(List<ItemEntity> items){
        items.forEach(i -> i.setList(this));
        this.items = items;
    }

    public void addItem(ItemEntity item){
        item.setList(this);
        this.items.add(item);
    }
}
