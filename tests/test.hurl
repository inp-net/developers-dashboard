POST http://localhost:5000/graphql

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
