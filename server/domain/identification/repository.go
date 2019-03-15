package identification

type Repository interface {
	FindAllIndentifications() []Identification
	FindIndentificationsBy(filter string) []Identification
	Create(identification Identification) Identification
	Remove(id string)
	Update(identification Identification) Identification
}
