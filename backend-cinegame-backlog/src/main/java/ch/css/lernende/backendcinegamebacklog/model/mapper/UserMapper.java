package ch.css.lernende.backendcinegamebacklog.model.mapper;

import ch.css.lernende.backendcinegamebacklog.entity.UserEntity;
import ch.css.lernende.backendcinegamebacklog.model.UserModel;

import java.util.ArrayList;

public class UserMapper {

    public static UserModel toUserModel(UserEntity userEntity) {
        // TODO: Implement proper role
        return UserModel.builder()
                .username(userEntity.getUsername())
                .password(userEntity.getPasswordSHA256())
                .role(new ArrayList<>())
                .build();
    }

}
