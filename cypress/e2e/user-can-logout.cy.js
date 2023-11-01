describe('User Can Logout', () => {
    it('user can logout', () => {
      cy.visit('http://127.0.0.1:8000/');
      cy.get('[data-id="email"]').type('superadmin@gmail.com');
      cy.get('[data-id="password"]').type('password');
      cy.get('[data-id="submit"]').click();
      cy.get('[data-id="username"]').click();
      cy.get('[data-id="logout-btn"]').click();
    })
  
  })