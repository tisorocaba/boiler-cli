<img height="70" align="right" src="https://raw.githubusercontent.com/baltazzar/boiler-cli/master/logo.png">

# Boiler CLI
> Ferramenta para desenvolvimento de projetos front-end

## Instalação

```bash
> npm install -g boiler-cli
```

Após a instalação o comando `boiler` ficará disponível para uso! Execute o seguinte comando:

```bash
> boiler
```

Deverá ser exibida a tela inicial do Boiler CLI com a versão e a lista de `tasks` disponíveis.

## Tasks

### init

Há duas maneiras de iniciar um projeto:

```bash
> boiler init <app_name>
```

... ou:

```bash
> cd <app_name>
> boiler init
```

**Observações**

1. `<app_name>` é o nome desejado para a pasta da aplicação.

### start

Para preparar a aplicação para desenvolvimento, execute o seguinte comando:

```bash
> cd <app_name>
> boiler start
```

As tarefas necessárias para preparar a aplicação para desenvolvimento serão executadas e um servidor web será instanciado no endereço: `http://localhost:3000`.
Ao realizar alterações no código-fonte da aplicação as tarefas de desenvolvimento serão executadas novamente e o browser será atualizado automaticamente!

**Observações**

1. `<app_name>` é o nome desejado para a pasta da aplicação;

2. Ao executar a task `start` em vários projetos ao mesmo tempo, a porta do servidor web incrementa `http://localhost:3001, http://localhost:3002, http://localhost:3003, etc`.

### build

Para preparar a aplicação para produção, execute o seguinte comando:

```bash
> cd <app_name>
> boiler build
```

As tarefas necessárias para preparar a aplicação para produção serão executadas e uma versão pronta para deploy será criada no caminho `<app_name>/dist/<app_version>`.

**Observações**

1. `<app_name>` é o nome desejado para a pasta da aplicação;
2. `<app_version>` é a versão informada no arquivo `package.json`.

## Suporte a es6

Para habilitar o suporte a es6, coloque o seguinte trecho no `package.json` da sua aplicação:

```json
"es6": {
	"blacklist": ["strict"],
	"optional": ["runtime"]
}
```

**Observações**

1. Todas as opções inseridas no objeto `"es6"` serão passadas como opções para o `babel-loader`;
2. Para desabilitar o suporte é só apagar o objeto `"es6"` ou alterar para `"es6": false`.