# Kenzie Hub - Parte 1 (Cadastro e Login)

# Registro de usuário

1. Crie um formulário utilizando React Hook Form e Zod;
2. Faça as validações necessárias:

- Todos os campos obrigatórios
- E-mail precisa ser fornecido no formato adequado
- Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo
- Confirmação de senha

3. Crie a função de cadastro (aplicando no submit do form), realizando uma requisição na rota /users (POST), conforme as orientações da documentação da API
4. Crie notificações de sucesso e erro
5. Em caso de sucesso, redirecione o usuário para a tela de login

# Login de usuário

1. Novamente, crie um formulário utilizando React Hook Form e Zod
2. Nesse formulário serão necessários somente validações de campo obrigatório (tanto e e-mail, quanto em senha)
3. Crie um estado de carregamento (loading) na rota de login, e um estado de usuário (user) de forma global
4. Crie a função de login, realizando uma requisição na rota /sessions (POST), conforme as orientação da documentação da API
5. Crie notificação
6. Em caso de sucesso, armazene o data.user no estado user, o data.token e data.user.id em chaves diferentes no localStorage(@TOKEN, @USERID), feito isso, redirecione o usuário para o dashboard

# Dashboard

1. Renderize as informações de nome e módulo do usuário na tela de dashboard
2. Crie uma função de logout, limpando o estado user e as chaves no localStorage(@TOKEN, @USERID)

# Importante

- Para deixar toda experiência refinada e fazer as notificações de sucesso e erro com mais facilidade, você pode utilizar o Toastfy
