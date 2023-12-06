package com.cesi.NegoSud.controller.person;

import com.cesi.NegoSud.business.person.PersonBusiness;
import com.cesi.NegoSud.controller.person.model.NewPerson;
import com.cesi.NegoSud.controller.person.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
public class PersonController {

    private final PersonBusiness personBusiness;

    @Autowired
    public PersonController(PersonBusiness personBusiness)  {
        this.personBusiness = personBusiness;
    }
    @PostMapping("/persons")
    public Person createPerson(@RequestBody NewPerson person)  {
        return personBusiness.createPersonBusiness(person);
    }
}
