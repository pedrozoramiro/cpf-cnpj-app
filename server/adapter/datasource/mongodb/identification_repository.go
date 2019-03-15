package mongodb

import (
	ide "github.com/cpf-cnpj-app/server/domain/identification"
)

type IdentificationRepository struct{}

func (IdentificationRepository) FindIndentificationsBy(filter string) []ide.Identification {
	//TODO: paginacao
	return nil
}

func (IdentificationRepository) FindAllIndentifications() []ide.Identification {
	return nil
}

func (IdentificationRepository) Create(identification ide.Identification) ide.Identification {
	//TODO: validar duplicados
	//TODO: validar cpf
	//TODO: validar cnpj
	return nil
}

func (IdentificationRepository) Remove(id string) {
}

func (IdentificationRepository) Update(identification ide.Identification) ide.Identification {

	return nil
}

/*



 */
