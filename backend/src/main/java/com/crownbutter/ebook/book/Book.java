package com.crownbutter.ebook.book;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String title;

    private String author;
    private String description;
    private String coverUrl;

    protected Book() {
    }

    public Book(String title, String author, String description, String coverUrl) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.coverUrl = coverUrl;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public String getDescription() { return description; }
    public String getCoverUrl() { return coverUrl; }

    public void update(String title, String author, String description, String coverUrl) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.coverUrl = coverUrl;
    }
}
