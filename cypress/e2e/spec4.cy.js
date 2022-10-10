

describe('post apiuser tests',()=>
{
it('post user',()=>
{
    cy.request
    ({
        method : 'post',
        url: 'https://jsonplaceholder.typicode.com/51324db1cb6e464684f7b1f8f380c0cc',
        body :
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": {"_id":"633fe3f95e22f903e803dd5c","name":"Sparkle Angel","age":2,"colour":"blue"}
        }

    })
      .then((res)=>{
      expect(res.status).to.eq(201)
    })
})
})
describe('get apiuser tests',()=>
{
it.only('get user',()=>
{
    cy.request
    ({
        method : 'Get',
        url: 'https://jsonplaceholder.typicode.com/51324db1cb6e464684f7b1f8f380c0cc/633fe3f95e22f903e803dd5c',
       // body :
        // {
        //     "userId": 1,
        //     "id": 1,
        //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //     "body": {"_id":"633fe3f95e22f903e803dd5c","name":"Sparkle Angel","age":2,"colour":"blue"}
        // }

    })
      .then((res)=>{
      expect(res.status).to.eq(201)
    })
})
})

