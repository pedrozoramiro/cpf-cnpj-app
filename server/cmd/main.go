package main

import (
	"library-go-ddd/adapter/datasource/hardcode"
	handlersmux "library-go-ddd/adapter/rest/mux"
	"library-go-ddd/domain/inventory"
	"log"
	"net/http"
)

func main() {
	bookservice := inventory.NewService(&hardcode.BookRepository{})
	router := handlersmux.NewHandler(bookservice)
	log.Fatal(http.ListenAndServe(":8000", router))
}
