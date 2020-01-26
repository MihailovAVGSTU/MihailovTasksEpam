package by.epam.task3.system.storage;

import by.epam.task3.system.entities.User;

import java.util.ArrayList;
import java.util.List;

/**
 * describes a storage with users
 */
public class UsersRepository {
    private static UsersRepository repository;
    private List<User> users;

    private UsersRepository() {
        users = new ArrayList<>();
        users.add(new User("admin1", "admin@mail.ru", "qwe123Q"));
    }

    /**
     * gets an instance of the storage
     * @return returns a storage object
     */
    public static synchronized UsersRepository getRepository() {
        if (repository == null) {
            repository = new UsersRepository();
        }
        return repository;
    }

    /**
     * gets a user by a login
     * @param login user's login
     * @return returns an user object
     */
    public User getUser(String login) {
        int index = getUserIndex(login);
        if (index != -1) {
            return users.get(index);
        }
        return null;
    }

    /**
     * adds an user into a storage
     * @param user a user for inserting
     * @return returns a boolean result
     */
    public boolean addUser(User user) {
        if (getUserIndex(user.getLogin()) == -1) {
            users.add(user);
            return true;
        }
        return false;
    }

    /**
     * finds out whether a user exists or not
     * @param login user's login
     * @param password user's password
     * @return return a boolean result
     */
    public boolean isUserExist(String login, String password) {
        int index = getUserIndex(login);
        if (index != -1) {
            return users.get(index).getPassword().equals(password);
        }
        return false;
    }

    /**
     * finds out whether a login is available
     * @param login user's login
     * @return returns a boolean value
     */
    public boolean isLoginAvailable(String login) {
        for (var user : users) {
            if (user.getLogin().equals(login)) {
                return false;
            }
        }
        return true;
    }

    /**
     * finds out whether an email is available
     * @param email user's email
     * @return returns a boolean value
     */
    public boolean isEmailAvailable(String email) {
        for (var user : users) {
            if (user.getEmail().equals(email)) {
                return false;
            }
        }
        return true;
    }

    private int getUserIndex(String login) {
        for (int index = 0; index < users.size(); index++) {
            if (users.get(index).getLogin().equals(login)) {
                return index;
            }
        }
        return -1;
    }
}
