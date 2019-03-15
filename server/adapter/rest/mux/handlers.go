package handlersmux

import (
	"library-go-ddd/domain/inventory"

	"net/http"

	"github.com/gorilla/mux"
)

func NewHandler(service inventory.Service) http.Handler {
	router := mux.NewRouter()
	inventoryRoutes := newInventoryRoutes(service)
	router.HandleFunc("/book", inventoryRoutes.GetBooks).Methods("GET")
	router.HandleFunc("/book", inventoryRoutes.CreateBook).Methods("POST")
	return router
}
