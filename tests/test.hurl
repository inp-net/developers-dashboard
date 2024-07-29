POST http://localhost:4000/graphql

Authorization: Bearer {{token}}

```graphql
{
    providers {
        ...on PaginatedProviderList {
            results {
           name     
            application {
            ...on Application {
            churrosGroup {
                id
                name
            }
            }
        }}
        }
    }
}
```
