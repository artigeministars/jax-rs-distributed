package org.gemini.jersey.api.configs;

import org.gemini.jersey.api.repositories.UserRepository;
import org.gemini.jersey.api.repositories.UserRepositoryImpl;
import org.gemini.jersey.api.services.UserService;
import org.gemini.jersey.api.services.UserServiceImpl;
import org.glassfish.hk2.utilities.binding.AbstractBinder;

public class ApplicationBinder extends AbstractBinder {
 @Override
         protected  void configure(){
     bind(UserServiceImpl.class).to(UserService.class);
     bind(UserRepositoryImpl.class).to(UserRepository.class);
 }

}
