package identification

type Service interface {
	FindAllIndentifications() []Identification
	FindIndentificationsBy(filter string) []Identification
	Create(identification Identification) Identification
	Remove(id string)
	Update(identification Identification) Identification
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{
		repository: repository,
	}
}

func (s *service) FindIndentificationsBy(filter string) []Identification {
	//TODO: paginacao
	return s.repository.FindIndentificationsBy(filter)
}

func (s *service) FindAllIndentifications() []Identification {
	return s.repository.FindAllIndentifications()
}

func (s *service) Create(identification Identification) Identification {
	//TODO: validar duplicados
	//TODO: validar cpf
	//TODO: validar cnpj
	return s.repository.Create(identification)
}

func (s *service) Remove(id string) {
	s.repository.Remove(id)
}

func (s *service) Update(identification Identification) Identification {
	return s.repository.Update(identification)
}
