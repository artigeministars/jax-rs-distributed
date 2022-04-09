package org.gemini.jersey.api.controllers;

import jakarta.inject.Inject;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import lombok.extern.slf4j.Slf4j;
import org.gemini.jersey.api.entities.Person;
import org.gemini.jersey.api.exceptions.ResourceNotFoundException;
import org.gemini.jersey.api.services.UserService;

import java.util.List;

@Slf4j
@Path("users")
public class UserResource {
    private UserService userService;

    @Inject
    public UserResource(UserService userService){
        this.userService = userService;
    }

    @GET
    @Path("{userId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Person getUser(@PathParam(value="userId") Long personId){
        return userService.findById(personId).orElseThrow(() -> new ResourceNotFoundException("personId" + personId + " not found"));
    }
    /**
     * Method handling HTTP GET requests. The returned object will be sent to
     * the client as "application/json" media type.
     *
     * @param userKey
     * @return
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Person> getUserList(@NotBlank(message = "user id is required") @QueryParam(value = "userKey") String userKey){
        log.info("User: {} ", userKey);
        return userService.findAll();
    }

    @POST
    public String createUser(@Valid Person person){
        userService.save(person);
        return "user successfully added";
    }

    @PUT
    @Path("{userId}")
    public String updateUser(@PathParam(value = "userId") Long userId, @Valid Person person){
        return userService.findById(userId).map(p -> {
           p.setUsername(person.getUsername());
           p.setSurname(person.getSurname());
           p.setEmail(person.getEmail());
           p.setName(person.getName());
           p.setPassword(person.getPassword());
           userService.update(p);
           return "User successfully updated";
        }).orElseThrow(() -> new ResourceNotFoundException("userId" + userId + " not found "));
    }

    @DELETE
    @Path("{userId}")
    public String deleteUser(@PathParam(value = "userId") Long userId){
        return userService.findById(userId).map(p -> {
           userService.deleteById(userId);
           return "User deleted";
        }).orElseThrow(() -> new ResourceNotFoundException("userId" + userId + " not found "));
    }

}
