package org.gemini.jersey.api.repositories;

import org.gemini.jersey.api.entities.Person;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.hibernate.cfg.Configuration;
import java.util.List;
import java.util.Optional;

public class UserRepositoryImpl implements  UserRepository {

    private EntityManagerFactory emf = Persistence.createEntityManagerFactory("GeminiJaxrs");
    private EntityManager em;

    private Session session;

    String path = "hibernate.cfg.xml";
    Configuration cfg = new Configuration().configure(path);

    SessionFactory sessionFactory ;

    public UserRepositoryImpl(){
        sessionFactory = cfg.buildSessionFactory();
        session = sessionFactory.openSession();
        em = emf.createEntityManager();
    }

    public Person save(Person person ){

        session.beginTransaction();
        session.save(person);
        session.getTransaction().commit();
        session.close();
        sessionFactory.close();

        /*
        em.getTransaction().begin();
        em.persist(person);
        em.getTransaction().commit();
        */
        return person;
    }

    public Optional<Person> findById(Long id){

        session.beginTransaction();

        Person person = session.get(Person.class, id);
        session.getTransaction().commit();
        session.close();
        sessionFactory.close();
        /*
        em.getTransaction().begin();
        Person person2 = em.find(Person.class,id);
        em.getTransaction().commit();
        */
        return person != null ? Optional.of(person) : Optional.<Person>empty();
    }

    @SuppressWarnings("unchecked")
    public List<Person> findAll(){

        return session.createQuery("SELECT a FROM users a", Person.class).getResultList();
        /*
        return em.createQuery("from users").getResultList();
     */
    }

    public Person update(Person person){

        session.beginTransaction();

        Person personCurrent = session.get(Person.class, person.getId());
        session.update(personCurrent);
        session.getTransaction().commit();
        session.close();
        sessionFactory.close();

        /*
        em.getTransaction().begin();
        person = em.merge(person);
        em.getTransaction().commit();
        */
        return person;

    }

    public void deleteById(Long id){

        session.beginTransaction();

        Person personCurrent = session.get(Person.class, id);
        if(personCurrent!=null){
            session.delete(personCurrent);
            System.out.println("Person is deleted");
            session.getTransaction().commit();
            session.close();
            sessionFactory.close();
        }

        /*
        em.getTransaction().begin();
        em.remove(em.find(Person.class,id));
        em.getTransaction().commit();
        */
    }

    public void close(){
     /*
        emf.close();
    */
    }

}
