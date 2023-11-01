describe('User Can Login to System', () => {
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://localhost:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    //assert
    cy.get('.nav-link > .d-sm-none').should('have.text', 'Hi, SuperAdmin');
  });

  it('user cant login with valid username and invalid password', () => {
    //arrange
    cy.visit('http://localhost:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password-salah');
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.');
  });

  it('user cant login with invalid username and valid password', () => {
    //arrange
    cy.visit('http://localhost:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadminsalah@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.');
  });

  it('user cant login with empty username and correct password', () => {
    //arrange
    cy.visit('http://localhost:8000/');
    //act
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should('have.text', 'The email field is required.');
  });

  it('user cant login with correct username and empty password', () => {
    //arrange
    cy.visit('http://localhost:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should('have.text', 'The password field is required.');
  });

  it('user cant login with empty username and empty password', () => {
    //arrange
    cy.visit('http://localhost:8000/');
    //act
    cy.get('.btn').click();
    //assert
    cy.get(':nth-child(2) > .invalid-feedback').should('have.text', 'The email field is required.');
    cy.get(':nth-child(3) > .invalid-feedback').should('have.text', 'The password field is required.');
  });

  it.only('user cant login with invalid username and invalid password', () => {
    //arrange
    cy.visit('http://localhost:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadminsalah@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password-salah');
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.');
  });

})