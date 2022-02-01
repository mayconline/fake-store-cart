describe('Home', () => {
  it('should interact with page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('h1').contains('Store Cart').should('be.visible');
    let cartButton = cy.get('button').contains('$0.00').should('be.enabled');

    cy.get('img').should('have.length', '20').should('be.visible');

    cy.get('p')
      .contains('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
      .should('be.visible');
    cy.get('p')
      .contains(
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
      )
      .should('be.visible');
    cy.get('p').contains('$109.95').should('be.visible');

    let addCartButton = cy
      .get('button')
      .contains('Add to Cart')
      .should('be.enabled');
    addCartButton.click();

    cy.get('h2').contains('My Cart').should('be.visible');
    cy.get('.cartItem_unit__ilQam').contains('$109.95 un').should('be.visible');
    let totalItemAmount = cy
      .get('.cartItem_price__FmSZt')
      .contains('Total:$109.95')
      .should('be.visible');

    let addQuantityButton = cy.get('.cartItem_buttons__mZZ2e > :nth-child(1)');
    addQuantityButton.click();
    totalItemAmount = cy
      .get('.cartItem_price__FmSZt')
      .contains('Total:$219.90')
      .should('be.visible');

    const reduceQuantityButton = cy.get(
      '.cartItem_buttons__mZZ2e > :nth-child(3)'
    );
    reduceQuantityButton.click();
    totalItemAmount = cy
      .get('.cartItem_price__FmSZt')
      .contains('Total:$109.95')
      .should('be.visible');

    let closeModalButton = cy.get('[viewBox="0 0 512 512"]');
    closeModalButton.click();

    cartButton = cy.get('button').contains('$109.95').should('be.enabled');
    cartButton.click();

    cy.get('button').contains('Empty Cart').should('be.enabled').click();
    cy.get('.emptyCart_container__U_TZt > span > img').should('be.visible');
    cy.get('h3').contains('No Items found!').should('be.visible');
    cy.get('button').contains('Empty Cart').should('be.disabled');

    closeModalButton = cy.get('[viewBox="0 0 512 512"]');
    closeModalButton.click();

    let addCartItem = cy
      .get('[data-testid="row-1"] > :nth-child(2) > button')
      .contains('Add to Cart')
      .should('be.enabled');
    addCartItem.click();

    closeModalButton = cy.get('[viewBox="0 0 512 512"]');
    closeModalButton.click();

    addCartItem = cy
      .get('[data-testid="row-3"] > :nth-child(2) > button')
      .contains('Add to Cart')
      .should('be.enabled');
    addCartItem.click();

    let paymentButton = cy
      .get('.modal_footer__ZbL9U > [type="button"]')
      .contains('$165.94')
      .should('be.enabled');

    addQuantityButton = cy.get(
      '[data-testid="row-3"] > .cartItem_buttons__mZZ2e > :nth-child(1)'
    );
    addQuantityButton.click();
    addQuantityButton.click();

    paymentButton = cy
      .get('.modal_footer__ZbL9U > [type="button"]')
      .contains('$277.92')
      .should('be.enabled');
  });
});
