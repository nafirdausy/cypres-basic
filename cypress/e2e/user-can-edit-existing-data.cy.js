describe('User Can Edit Existing Data', () => {
  afterEach(() => {
    cy.exec(
     "cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed"
    );
  });

  beforeEach(() => {
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
  });

  it('user can edit username', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click();
    cy.get('#name').clear('user ');
    cy.get('#name').type('user edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user').should('have.text', 'user edited');
    cy.get('.alert')
    .should('be.visible')
    .and('have.class', 'alert-success')
    .contains('User Berhasil Diupdate');
  });

  it.only('user can edit username userBaru', () => {
    cy.get('.table td').contains('userBaru').parent().find('a').contains('Edit').click();
    cy.get('#name').clear('userBaru ');
    cy.get('#name').type('user edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user edited').should('have.text', 'user edited');
    cy.get('.alert')
    .should('be.visible')
    .and('have.class', 'alert-success')
    .contains('User Berhasil Diupdate');
  });

  it('user can edit email', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click();
    cy.get('#email').clear('user@gmail.com');
    cy.get('#email').type('useredited@gmail.com');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user').next().should('have.text', 'useredited@gmail.com');
    cy.get('.alert')
    .should('be.visible')
    .and('have.class', 'alert-success')
    .contains('User Berhasil Diupdate');
  });

  it('user can edit username and email', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click();
    cy.get('#name').clear('user ');
    cy.get('#name').type('user edited');
    cy.get('#email').clear('user@gmail.com');
    cy.get('#email').type('useredited@gmail.com');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user').should('have.text', 'user edited');
    cy.get('.table td').contains('user').next().should('have.text', 'useredited@gmail.com');
    cy.get('.alert')
    .should('be.visible')
    .and('have.class', 'alert-success')
    .contains('User Berhasil Diupdate');
  });

  it('user can cancel edit data', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click();
    cy.get('#name').clear('user ');
    cy.get('#name').type('user edited');
    cy.get('#email').clear('user@gmail.com');
    cy.get('#email').type('useredited@gmail.com');
    cy.get('.btn-secondary').contains('Cancel').click();
    cy.get('.table td').contains('user').should('be.visible');
  });

  //negative
  it('user can edit email', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click();
    cy.get('#email').clear('user@gmail.com');
    cy.get('#email').type('superadmin@gmail.com');
    cy.get('.btn-primary').contains('Submit').click();
  });
});