describe('template spec', () => {
  afterEach(() => {
    cy.exec(
     "cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed"
    );
  });

  it('add new user baru', () => {
    //arrange
    //reset database by calling php artisan
    cy.exec(
      "cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed"
    );
    cy.visit('http://127.0.0.1:8000/')
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://127.0.0.1:8000/user-management/user');
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type('userBaru');
    cy.get('#email').type('userbaru@gmail.com');
    cy.get('#password').type('11111111');
    cy.get('.btn-primary').click();
    //assert
    cy.get('p').should('be.visible');
    cy.get('p').should('have.text', 'Data Berhasil Ditambahkan');
    //cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
    //cy.get('.text-danger').click();
  })
})