package users

import (
	"net/http"

	"github.com/DarrelASandbox/security-jwt-go-gin-mysql-react/domain/users"
	"github.com/DarrelASandbox/security-jwt-go-gin-mysql-react/services"
	"github.com/DarrelASandbox/security-jwt-go-gin-mysql-react/utils/errors"
	"github.com/gin-gonic/gin"
)

func Register(c *gin.Context) {
	var user users.User

	// passing c.Request.Body into the memory address pointed by the pointer
	if err := c.ShouldBindJSON(&user); err != nil {
		err := errors.NewBadRequestError("invalid json body")
		c.JSON(err.Status, err)
		return
	}

	result, saveErr := services.CreateUser(user)
	if saveErr != nil {
		c.JSON(saveErr.Status, saveErr)
		return
	}

	c.JSON(http.StatusOK, result)
}
