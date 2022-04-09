package org.gemini.jersey.api.services;

import org.gemini.jersey.api.entities.Person;

import java.util.List;
import java.util.Optional;

public interface UserService {
    Person save(Person person);
    Person update(Person person);
    void deleteById(Long id);
    Optional<Person> findById(Long id);
    List<Person> findAll();
}
