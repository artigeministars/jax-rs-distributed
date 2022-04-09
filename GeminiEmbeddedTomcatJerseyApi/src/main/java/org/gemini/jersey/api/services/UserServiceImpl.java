package org.gemini.jersey.api.services;

import jakarta.inject.Inject;
import org.gemini.jersey.api.entities.Person;
import org.gemini.jersey.api.repositories.UserRepository;

import java.util.List;
import java.util.Optional;

public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    @Inject
    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public Person save(Person person){
        return userRepository.save(person);
    }

    @Override
    public Optional<Person> findById(Long id){
        return userRepository.findById(id);
    }

    @Override
    public List<Person> findAll(){
        return userRepository.findAll();
    }

    @Override
    public Person update(Person person){
        return userRepository.update(person);
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

}
