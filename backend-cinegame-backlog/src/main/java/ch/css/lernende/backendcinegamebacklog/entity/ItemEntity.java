package ch.css.lernende.backendcinegamebacklog.entity;

import ch.css.lernende.backendcinegamebacklog.entity.type.State;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "cinegame_item")
public class ItemEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @Column(name = "title")
    String title;

    @Column(name = "rating")
    int rating;

    // In hours or episodes watched
    @Column(name = "progress")
    int progress;

    @Column(name = "state")
    State state;

    @ManyToOne(fetch = FetchType.EAGER)
    private ListEntity list;
}
