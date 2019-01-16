package pl.ewe.library.controllers;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import pl.ewe.library.model.BookLocation;
import pl.ewe.library.repositories.BookLocationRepository;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
public class BookLocationControllerTest {

    @MockBean
    BookLocationRepository bookLocationRepository;

    @Test
    public void shouldFindBook() throws Exception {
        BookLocation bookLocation = new BookLocation();
        bookLocation.setLocationId(1);

        Mockito.when(bookLocationRepository.findById(bookLocation.getLocationId())).thenReturn(Optional.of(bookLocation));

        BookLocation findBookLocation = bookLocationRepository.findById(1).orElseThrow(RuntimeException::new);
        Assert.assertEquals(Optional.of(1), Optional.of(findBookLocation.getLocationId()));
    }

    @Test
    public void shouldReturnSize0() {
        Mockito.when(bookLocationRepository.findAll()).thenReturn(Collections.emptyList());

        Iterable iterable = bookLocationRepository.findAll();
        List list = (List) iterable;

        int size = list.size();

        Assert.assertEquals(0, size);
    }

    @Test
    public void shouldReturnSize2() {
        BookLocation bookLocation1 = new BookLocation();
        BookLocation bookLocation2 = new BookLocation();

        Mockito.when(bookLocationRepository.findAll()).thenReturn(Arrays.asList(bookLocation1, bookLocation2));

        Iterable iterable = bookLocationRepository.findAll();
        List list = (List) iterable;

        int size = list.size();

        Assert.assertEquals(2, size);
    }


}