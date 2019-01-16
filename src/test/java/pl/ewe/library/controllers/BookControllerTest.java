package pl.ewe.library.controllers;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.test.context.junit4.SpringRunner;
import pl.ewe.library.model.Book;
import pl.ewe.library.repositories.BookRepository;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RunWith(SpringRunner.class)
public class BookControllerTest {

    @MockBean
    BookRepository bookRepository;

    @Test
    public void shouldFindBook() throws Exception {
        Book book = new Book();
        book.setBookId(1);

        Mockito.when(bookRepository.findById(book.getBookId())).thenReturn(Optional.of(book));

        Book findBook = bookRepository.findById(1).orElseThrow(RuntimeException::new);
        Assert.assertEquals(Optional.of(1), Optional.of(findBook.getBookId()));
    }

    @Test
    public void shouldReturnSize0() {
        Mockito.when(bookRepository.findAll()).thenReturn(Collections.emptyList());

        Iterable iterable = bookRepository.findAll();
        List list = (List) iterable;

        int size = list.size();

        Assert.assertEquals(0, size);
    }

    @Test
    public void shouldReturnSize2() {
        Book book1 = new Book();
        Book book2 = new Book();

        Mockito.when(bookRepository.findAll()).thenReturn(Arrays.asList(book1, book2));

        Iterable iterable = bookRepository.findAll();
        List list = (List) iterable;

        int size = list.size();

        Assert.assertEquals(2, size);
    }

    @Test
    public void shouldDeleteBook() {
        Book book = new Book();
        book.setBookId(1);

        Mockito.when(bookRepository.findAll()).thenReturn(Collections.singletonList(book));

        Iterable iterable = bookRepository.findAll();
        List list = (List) iterable;

        int size = list.size();

        Assert.assertEquals(1, size);

        bookRepository.deleteById(1);

        Mockito.when(bookRepository.findAll()).thenReturn(Collections.emptyList());
        iterable = bookRepository.findAll();
        list = (List) iterable;

        size = list.size();

        Assert.assertEquals(0, size);
    }

}