FROM openjdk:15
COPY ./target/GeminiEmbeddedTomcatJerseyApi-1.0-SNAPSHOT.jar /opt/lib/
EXPOSE 8025
ENTRYPOINT ["/usr/bin/java"]
CMD ["-jar", "/opt/lib/GeminiEmbeddedTomcatJerseyApi-1.0-SNAPSHOT.jar"]
