package pl.ewe.library.controllers;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import pl.ewe.library.model.BookOrder;
import pl.ewe.library.repositories.OrderRepository;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
public class OrderControllerTest {

    @MockBean
    OrderRepository orderRepository;

    @Test
    public void shouldFindBook() throws Exception {
        BookOrder bookOrder = new BookOrder();
        bookOrder.setOrderId(1);

        Mockito.when(orderRepository.findById(bookOrder.getOrderId())).thenReturn(Optional.of(bookOrder));

        BookOrder findBookOrder = orderRepository.findById(1).orElseThrow(RuntimeException::new);
        Assert.assertEquals(Optional.of(1), Optional.of(findBookOrder.getOrderId()));
    }

    @Test
    public void shouldReturnSize0() {
        Mockito.when(orderRepository.findAll()).thenReturn(Collections.emptyList());

        Iterable iterable = orderRepository.findAll();
        List list = (List) iterable;

        int size = list.size();

        Assert.assertEquals(0, size);
    }

    @Test
    public void shouldReturnSize2() {
        BookOrder bookOrder1 = new BookOrder();
        BookOrder bookOrder2 = new BookOrder();

        Mockito.when(orderRepository.findAll()).thenReturn(Arrays.asList(bookOrder1, bookOrder2));

        Iterable iterable = orderRepository.findAll();
        List list = (List) iterable;

        int size = list.size();

        Assert.assertEquals(2, size);
    }

    @Test
    public void shouldDeleteBook() {
        BookOrder bookOrder = new BookOrder();
        bookOrder.setOrderId(1);

        Mockito.when(orderRepository.findAll()).thenReturn(Collections.singletonList(bookOrder));

        Iterable iterable = orderRepository.findAll();
        List list = (List) iterable;

        int size = list.size();

        Assert.assertEquals(1, size);

        orderRepository.deleteById(1);

        Mockito.when(orderRepository.findAll()).thenReturn(Collections.emptyList());
        iterable = orderRepository.findAll();
        list = (List) iterable;

        size = list.size();

        Assert.assertEquals(0, size);
    }

}