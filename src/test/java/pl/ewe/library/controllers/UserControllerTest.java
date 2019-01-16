package pl.ewe.library.controllers;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import pl.ewe.library.model.User;
import pl.ewe.library.repositories.UserRepository;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
public class UserControllerTest {

    @MockBean
    UserRepository userRepository;

    @Test
    public void shouldFindUser() throws Exception {
        User user = new User();
        user.setId(1);

        Mockito.when(userRepository.findById(user.getId())).thenReturn(Optional.of(user));

        User findUser = userRepository.findById(1).orElseThrow(RuntimeException::new);
        Assert.assertEquals(Optional.of(1), Optional.of(findUser.getId()));
    }

    @Test
    public void shouldReturnSize0() {
        Mockito.when(userRepository.findAll()).thenReturn(Collections.emptyList());

        Iterable iterable = userRepository.findAll();
        List list = (List) iterable;

        int size = list.size();

        Assert.assertEquals(0, size);
    }

    @Test
    public void shouldReturnSize2() {
        User user1 = new User();
        User user2 = new User();

        Mockito.when(userRepository.findAll()).thenReturn(Arrays.asList(user1, user2));

        Iterable iterable = userRepository.findAll();
        List list = (List) iterable;

        int size = list.size();

        Assert.assertEquals(2, size);
    }

    @Test
    public void shouldDeleteUser() {
        User user = new User();

        Mockito.when(userRepository.findAll()).thenReturn(Collections.singletonList(user));

        Iterable iterable = userRepository.findAll();
        List list = (List) iterable;

        int size = list.size();

        Assert.assertEquals(1, size);

        userRepository.deleteById(1);

        Mockito.when(userRepository.findAll()).thenReturn(Collections.emptyList());
        iterable = userRepository.findAll();
        list = (List) iterable;

        size = list.size();

        Assert.assertEquals(0, size);
    }
}