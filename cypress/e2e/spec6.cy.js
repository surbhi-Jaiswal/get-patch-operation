
describe('api user test',()=>
{
    it('put user details',()=>
    {
     cy.request
     ({
        method: 'put',
        url: 'https://crudcrud.com/api/51324db1cb6e464684f7b1f8f380c0cc/sample1',
        body:{"name":"john richard", "age":20, "colour":"white"}
     })
     .then((res)=>{
        
        expect(res.status).to.eq(201)
     })

    })
})