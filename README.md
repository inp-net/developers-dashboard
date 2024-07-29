# churros-developers

WIP

```
# cf https://docs.goauthentik.io/docs/installation/docker-compose#preparation
echo "PG_PASS=$(openssl rand -base64 36 | tr -d '\n')" >> .env
echo "AUTHENTIK_SECRET_KEY=$(openssl rand -base64 60 | tr -d '\n')" >> .env
docker compose up -d
# se faire un café
bun i
bun mesh dev
```

## Tester

1. Aller sur <http://localhost:9001/if/flows/initial-setup>
2. [Créer un token](http://localhost:9001/if/user/#/settings;%7B%22page%22%3A%22page-tokens%22%7D)
3. Lancer `HURL_token=...le token ici... bun hurl tests/test.hurl`
