# churros-developers

WIP

```
# cf https://docs.goauthentik.io/docs/installation/docker-compose#preparation
echo "PG_PASS=$(openssl rand -base64 36 | tr -d '\n')" >> .env
echo "AUTHENTIK_SECRET_KEY=$(openssl rand -base64 60 | tr -d '\n')" >> .env
docker compose up -d
# se faire un café
bun i
bun dev
```

## Tester

1. Aller sur <http://localhost:9001/if/flows/initial-setup>
2. [Créer un token](http://localhost:9001/if/user/#/settings;%7B%22page%22%3A%22page-tokens%22%7D)
3. Lancer `HURL_token=...le token ici... bun hurl tests/test.hurl`

## Migration clients OAuth depuis Churros

| Field               | Type                   | migration                                                                             |
| ------------------- | ---------------------- | ------------------------------------------------------------------------------------- |
| id                  | String                 | /providers/oauth2: `client_id`                                                        |
| createdAt           | DateTime               | _perdu_                                                                               |
| updatedAt           | DateTime?              | _perdu_                                                                               |
| ownerId             | String                 | /core/applications: `group` (uid, ou id??)                                            |
| owner               | Group                  | (via API Churros)                                                                     |
| name                | String                 | /core/applications: `name`                                                            |
| description         | String                 | /core/applications: `meta_description`                                                |
| allowedRedirectUris | String[]               | /providers/oauth2: `redirect_uris`                                                    |
| credentials         | ThirdPartyCredential[] | _géré par Authentik, plus nécéssaire_                                                 |
| secret              | String                 | /providers/oauth2: `client_secret`                                                    |
| website             | String                 | /core/applications: `meta_publisher`                                                  |
| faviconUrl          | String                 | /core/applications: `meta_icon` (et `POST /core/applications/{slug}/set_icon(_url)?`) |
| active              | Boolean                | _perdu_                                                                               |
| users               | User[]                 | /core/applications/{slug}/user_by (peut-être)                                         |
