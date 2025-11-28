describe("Parsing Json Response", () => {
    
    it("Parsing Simple Json response", () => {

        cy.request(
            {
                method: 'GET',
                url: 'https://fakestorestapi.com/products',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('array');
            expect(response.body[0]).to.have.property('id');
            expect(response.body[0]).to.have.property('name');
            expect(response.body[0]).to.have.property('price');
            
            // Parsing the response
            const firstProduct = response.body[0];
            cy.log(`First Product ID: ${firstProduct.id}`);
            cy.log(`First Product Name: ${firstProduct.name}`);
            cy.log(`First Product Price: ${firstProduct.price}`);
        })

    })


})