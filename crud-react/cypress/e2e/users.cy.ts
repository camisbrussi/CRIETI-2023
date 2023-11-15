describe('Users Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')

    cy.get('[data-cy="login-email"]').type("test@email.com")
    cy.get('[data-cy="login-password"]').type("123456")

    cy.contains("button", "Entrar").click();

    cy.intercept("POST", "http://localhost:3333/login", {
      fixture: "login.json"
    })

    cy.wait(1000)

    cy.intercept("GET", "http://localhost:3333/usuarios", {
      fixture: "users.json"
    })

    cy.wait(1000)

  })

  it('deve abrir o modal de criação de usuários', () => {
    cy.visit('http://localhost:3000/users')

    cy.contains("button", "Criar usuário").click()
    cy.contains("button", "Enviar Dados").should("exist")

    cy.contains("button", "Cancelar").click()
    cy.contains("button", "Enviar Dados").should("not.exist")
  })

  it('deve abrir a modal de edição de usuãrio', () => {
    cy.visit('http://localhost:3000/users')

    cy.get('[aria-label="Editar"]', { timeout: 10000}).first().click();
    cy.contains("button", "Enviar Dados").should("exist")

    cy.contains("button", "Cancelar").click()
    cy.contains("button", "Enviar Dados").should("not.exist")
  })
})