package org.gemini.jersey.api.services;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/message")
public class Message {

    @GET
    @Path("/main")
    public String getMainMessage(){
        return "get main message...";
    }
}
