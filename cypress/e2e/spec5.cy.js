describe('api user tests',()=>
{
    it('get user details',()=>
    {
        cy.request({
            method: 'Get',
            url:'https://crudcrud.com/api/51324db1cb6e464684f7b1f8f380c0cc/sample1',
        //     Headers :{ 
        //         authentication: '51324db1cb6e464684f7b1f8f380c0cc'}
         })
         .then((res)=>{
            console.log(res)
            expect(res.status).to.eq(200) 
          
         })
    })


describe('api user tests',()=>{
    it('get user details',()=>{
        cy.request({
            method: 'Post',
            url:'https://crudcrud.com/api/51324db1cb6e464684f7b1f8f380c0cc/sample1',
            // headers :{
            //     authantication : '51324db1cb6e464684f7b1f8f380c0cc',
            
            body : {"name":"Sparkle Angel","age":2,"colour":"blue"} 
            })
        .then((res)=>{
            expect (res.status).to.eq(201)

    })

})
})})
describe('api user test',()=>{
    it.only('apiPUT',()=>{
        cy.request({
            method: 'PUT',
            url:'https://crudcrud.com/api/51324db1cb6e464684f7b1f8f380c0cc/sample1/6340111b5e22f903e803de2f',
            body:{
                "name":"jaiswal",
                "birth":"09-02-1989"
            }
        }).then((res)=>{
            console.log(res)
expect(res.status).to.eq(200)
        })
    })

})
