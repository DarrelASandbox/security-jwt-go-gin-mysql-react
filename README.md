## About The Project

- [JWT Authentication - Part 1: Golang w/ Gin Backend Setup](https://www.youtube.com/watch?v=QD2BCikYCyc)
- [JWT Authentication - Part 2: React Typescript Authentication Page](https://www.youtube.com/watch?v=ZZA96UPl_o0)
- [David Hwang](https://github.com/dhij)
- [Original Repo: go_react-auth-demo](https://github.com/dhij/go_react-auth-demo)

&nbsp;

---

&nbsp;

## Notes

- **Go Server Basic Setup**
  - Gin Framework
  - Setup routes for
    - `/api/register`
    - `/api/login`
    - `/api/user`
    - `/api/logout`
  - MySQL database
  - JWT for authentication
  - CORS middleware
- **Typescript React Setup**
  - CRA with the typescript template
    - `npx create-react-app client --template typescript`
    - `screens` folder
      - `HomeScreen`
      - `LoginScreen`
      - `SignUpScreen`
    - Routing in `App.tsx`
  - [Bootswatch](https://bootswatch.com/)
    - Lux theme
  - [React Bootstrap](https://react-bootstrap.github.io/)
  - [Type Checking Redux Thunks](https://redux.js.org/usage/usage-with-typescript#type-checking-redux-thunks)
- **Deployment**
  - Build a static file for the client using `npm run build`
  - Serve that static file from the Go server (http.Serverfile)

```sh
# To import local package
# In server folder
go mod init github.com/DarrelASandbox/security-jwt-go-gin-mysql-react
go mod tidy
```

- Create in mySQL: `users_db` -> `users` table
  - id (Mark column as AUTO_INCREMENT)
  - first_name
  - last_name
  - email
  - password
- `users_dto.go`: data transfer object
- `users_dao.go`: data access object

&nbsp;

---

&nbsp;
