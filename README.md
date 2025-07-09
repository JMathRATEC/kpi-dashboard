## Instalação e Execução com Docker e Frontend React

Siga os passos abaixo para instalar e executar esta aplicação Laravel (backend) em Docker e o dashboard React (frontend).

### Pré-requisitos

-   Docker Desktop instalado
-   Docker Compose instalado
-   Node.js (v16+) e npm instalados localmente
-   Git

## Backend (Laravel)

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. **Copie o arquivo de ambiente:**

    ```bash
    cp .env.example .env
    ```

3. **Suba os containers Docker:**

    ```bash
    docker-compose up -d
    ```

4. **Instale dependências do Composer no container:**

    ```bash
    docker-compose exec app composer install
    ```

5. **Gere a chave da aplicação:**

    ```bash
    docker-compose exec app php artisan key:generate
    ```

6. **Execute as migrações (opcional):**

    ```bash
    docker-compose exec app php artisan migrate
    ```

7. **Verifique se o backend está rodando:**
   Abra no navegador ou Postman:

    ```
    http://localhost/api/kpis
    ```

## Frontend (React + Vite + Tailwind)

1. **Navegue para a pasta do frontend:**

    ```bash
    cd frontend
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    - O Vite abrirá o frontend em `http://localhost:5173` (ou porta informada no terminal).

4. **Teste o dashboard:**

    - Abra seu navegador em

        ```
        http://localhost:5173
        ```

    - O frontend irá consumir o endpoint `/api/kpis` do backend e exibir os cards.
    - Use o console do navegador para verificar eventuais erros de rede.

5. **Build para produção (opcional):**

    ```bash
    npm run build
    ```

    - Os arquivos otimizados ficarão em `frontend/dist`.
    - Você pode copiar manualmente para `public/frontend` no backend ou configurar um script:

        ```json
        "scripts": {
          "build": "vite build && cp -r dist ../public/frontend"
        }
        ```

## Comandos Úteis

-   Parar todos os containers:

    ```bash
    docker-compose down
    ```

-   Ver logs do backend:

    ```bash
    docker-compose logs -f app
    ```

-   Ver logs do MySQL:

    ```bash
    docker-compose logs -f mysql
    ```

-   Para reiniciar o frontend:

    ```bash
    cd frontend && npm run dev
    ```

---

## Usuário fixo para login

``email: admin@example.com``
``senha:senha123`` 

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
