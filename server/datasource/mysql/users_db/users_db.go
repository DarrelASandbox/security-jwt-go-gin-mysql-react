package users_db

import (
	// need _ to ensure this import stays in this file
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

var (
	Client   *sql.DB
	username = ""
	password = ""
	host     = "localhost:3306"
	schema   = "users_db"
)

func init() {

	// username:password@tcp(host)/user_schema
	dataSourceName := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8", username, password, host, schema)

	// already have `Client` defined above
	// and also we need err
	// hence we declare err without dynamic assignment
	var err error
	Client, err = sql.Open("mysql", dataSourceName)
	if err != nil {
		panic(err)
	}

	if err := Client.Ping(); err != nil {
		panic(err)
	}

	log.Println("connected to mySQL database")
}
