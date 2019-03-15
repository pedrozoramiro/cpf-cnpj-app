package identification

type Identification struct {
	ID        string `json:"id"`
	Value     string `json:"value"`
	Type      string `json:"type"`
	Blacklist bool   `json:"blacklist"`
}
