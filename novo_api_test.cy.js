/// <reference types = 'Cypress'/>

describe("Novo test de api", ()=>{
    it ("testar se o teste foi realizado com sucesso", () =>{
        cy.request({
        method: 'POST',
        url: 'http://localhost:3000/Login',
        body: {
            "test1",
            "test2"
        }
        }).then((Response)=>{
        expect(Response.status).to.equal(200)
        expect(Response.body)
        })
})
})