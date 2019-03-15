package handlersmux

import (
	"library-go-ddd/domain/inventory"
)

import (
	"encoding/json"
	"net/http"
)

type inventoryRoute struct {
	service inventory.Service
}

func newInventoryRoutes(service inventory.Service) *inventoryRoute {
	return &inventoryRoute{
		service: service,
	}
}

func (routes *inventoryRoute) GetBooks(write http.ResponseWriter, request *http.Request) {
	write.WriteHeader(http.StatusOK)
	json.NewEncoder(write).Encode(routes.service.FindAllBooks())
}
func (routes *inventoryRoute) CreateBook(write http.ResponseWriter, request *http.Request) {
	write.WriteHeader(http.StatusCreated)
	var book inventory.Book
	json.NewDecoder(request.Body).Decode(&book)
	routes.service.CreateBook(book)
}

//func GetBook(w http.ResponseWriter, r *http.Request)    {}
//func DeleteBook(w http.ResponseWriter, r *http.Request) {}
