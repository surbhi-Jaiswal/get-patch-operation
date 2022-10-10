
describe('get users details',()=>
{
    it('get operation',()=>
    {
   cy.request({
    method:'GET',
    url:'https://jsonplaceholder.typicode.com/posts/1/comments',

   })
   .then((res)=>{
    console.log(res)
    expect(res.status).to.eq(200)
})
    })
})
describe('get user detail',()=>{
    it.only('get operation with ID',()=>{
    cy.request({
        method :'GET',
        url:'https://jsonplaceholder.typicode.com/posts/1/comments?id=3'
    })
    .then((res)=>{
        console.log(res)
    })
    })
})