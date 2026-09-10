package com.crownbutter.ebook.book;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {
    private final BookRepository repository;

    public BookController(BookRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Book> findAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Book findById(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book create(@Valid @RequestBody BookRequest request) {
        return repository.save(new Book(
                request.title(),
                request.author(),
                request.description(),
                request.coverUrl()
        ));
    }

    @PutMapping("/{id}")
    public Book update(@PathVariable Long id, @Valid @RequestBody BookRequest request) {
        Book book = findById(id);
        book.update(request.title(), request.author(), request.description(), request.coverUrl());
        return repository.save(book);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        Book book = findById(id);
        repository.delete(book);
    }

    public record BookRequest(
            @NotBlank String title,
            String author,
            String description,
            String coverUrl
    ) {}

    @ResponseStatus(HttpStatus.NOT_FOUND)
    static class BookNotFoundException extends RuntimeException {
        BookNotFoundException(Long id) {
            super("Book not found: " + id);
        }
    }
}
