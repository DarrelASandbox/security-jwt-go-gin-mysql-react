package app

import "github.com/DarrelASandbox/security-jwt-go-gin-mysql-react/controller/users"

func mapUrls() {
	router.POST("/api/register", users.Register)
}
