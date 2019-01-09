package pl.ewe.library.controllers;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.test.context.junit4.SpringRunner;
import pl.ewe.library.model.Book;
import pl.ewe.library.repositories.BookRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.any;


@RunWith(SpringRunner.class)
public class BookControllerTest {

    @MockBean
    BookRepository bookRepository;

    @Before
    public void setUp() {
        Book book = new Book();
        book.setBookId(1);
        book.setTitle("Pan Tadeusz");
        Mockito.when(bookRepository.findById(book.getBookId())).thenReturn(Optional.of(book));
    }

    @Test
    public void shouldFindBook() throws Exception {
        Book book = bookRepository.findById(1).orElseThrow(RuntimeException::new);
        Assert.assertEquals(Optional.of(1), Optional.of(book.getBookId()));

    }

}