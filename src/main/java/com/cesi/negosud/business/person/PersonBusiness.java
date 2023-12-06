package com.cesi.NegoSud.business.person;

import com.cesi.NegoSud.controller.person.model.NewPerson;
import com.cesi.NegoSud.controller.person.model.Person;
import com.cesi.NegoSud.dao.person.PersonDAO;
import org.springframework.stereotype.Service;

@Service
public class PersonBusiness {
    PersonDAO personDAO;

    public PersonBusiness(PersonDAO personDAO)  {
        this.personDAO = personDAO;
    }

    public Person createPersonBusiness(NewPerson person)   {
        return personDAO.create(person);
    }
}
