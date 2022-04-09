package org.gemini.jersey.api.configs;

import org.gemini.jersey.api.controllers.UserResource;
import org.gemini.jersey.api.repositories.UserRepository;
import org.gemini.jersey.api.services.UserService;
import org.gemini.jersey.api.services.UserServiceImpl;
import org.glassfish.hk2.api.ServiceLocator;
import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.glassfish.jersey.inject.hk2.ImmediateHk2InjectionManager;
import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.ServerProperties;
import org.glassfish.jersey.server.spi.Container;
import org.glassfish.jersey.server.spi.ContainerLifecycleListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.glassfish.hk2.extras.ExtrasUtilities.enableTopicDistribution;

/*

public final String server_address = "http://localhost";
  public final int server_port = 7780;

  public final String db_connection = "jdbc:postgresql://localhost/todo";
  public final String db_username = "todo";
  public final String db_password = "todo";

 */

public class JerseyConfig  extends ResourceConfig {
    private static final Logger LOGGER = LoggerFactory.getLogger(JerseyConfig.class);
    public JerseyConfig(){

         /*
          public final String server_address = "http://localhost";
          public final int server_port = 7780;

          public final String db_connection = "jdbc:postgresql://localhost/todo";
          public final String db_username = "todo";
          public final String db_password = "todo";

         */

        LOGGER.info("\nEntered JerseyConfig Constructor\n");
        register(JacksonFeature.class);
        register(ApplicationBinder.class);
        packages("org.gemini.jersey.api.controllers;org.gemini.jersey.api.services;org.gemini.jersey.api.entities;org.gemini.jersey.api.repositories");



        // Now you can expect validation errors to be sent to the
        // client.
        property(ServerProperties.BV_SEND_ERROR_IN_RESPONSE, true);

        register(new ContainerLifecycleListener() {
            public void onStartup(Container container) {
                LOGGER.info("\nEntered ContainerLifecycleListener onStartUP\n");
                // access the ServiceLocator here
                // serviceLocator = container.getApplicationHandler().
                ServiceLocator serviceLocator = ((ImmediateHk2InjectionManager)container
                        .getApplicationHandler().getInjectionManager()).getServiceLocator();
                enableTopicDistribution(serviceLocator);
                // ... do what you need with ServiceLocator ...
            }

            public void onReload(Container container) {
                LOGGER.info("\nEntered ContainerLifecycleListener onReload\n");
            }

            public void onShutdown(Container container) {
                LOGGER.info("\nEntered ContainerLifecycleListener onShutdown\n");
            }
        });

        register(new AbstractBinder() {
            @Override
            protected void configure() {
                // hk2 bindings
                //   bindFactory(Factories.MailServiceFactory.class).to(EMailService.class)
                //           .in(Singleton.class);
            }
        });
    }
}
