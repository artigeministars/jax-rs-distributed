package org.gemini.jersey.api.repositories;

import org.gemini.jersey.api.entities.Person;

import java.util.List;
import java.util.Optional;

public interface UserRepository {

    Person save(Person person );

    Optional<Person> findById(Long id);

    List<Person> findAll();

    Person update(Person person);

    void deleteById(Long id);

    void close();

}
