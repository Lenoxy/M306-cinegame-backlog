package ch.css.lernende.backendcinegamebacklog.model;

public enum RoleModel {
    VISITOR ("VISITOR"),
    AUTHORIZED ("AUTHORIZED");

    private final String value;

    RoleModel(String value) {
        this. value = value;
    }

    public String getValue() {
        return this.value;
    }

    @Override
    public String toString() {
        return this.value;
    }

}
