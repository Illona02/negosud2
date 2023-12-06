package com.cesi.NegoSud.dao.person;

import com.cesi.NegoSud.controller.person.model.NewPerson;
import com.cesi.NegoSud.controller.person.model.Person;
import org.springframework.stereotype.Repository;

@Repository
public class PersonDAO {
    public Person create(NewPerson person) {
        return new Person();
    }
}
