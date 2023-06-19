Esta lista de exercícios terá exercícios que serão etapas de um projeto que mostra uma lista de tarefas que um usuário deseja cadastrar.

Para a resolução desta lista, você precisará executar comandos em seu terminal. O terminal se trata de um programa de interface de linha de comando, onde digitamos comandos para o computador, e mandamos executar cada comando pela tecla enter. O computador vai responder imprimindo na tela os resultados dos comandos executados.

Se você estiver usando o windows, seu terminal será o prompt de comando chamado de “cmd”. No mac / linux, há um aplicativo chamado “terminal”, que abrirá uma sessão no shell unix. Este shell pode ser identificado pelo símbolo “$”.

Cada comando que deverá ser executado no terminal, será precedido pelo prefixo “$”, indicando que eles devem ser executados no terminal de seu sistema operacional.

Nos demais cartões, seguem as tarefas a serem realizadas em formato de exercícios.


Para criar um projeto React, siga os passos abaixo:

Em seu terminal, digite o seguinte comando para criar um projeto react: $npm create vite@latest lista-tarefas – –template reactEste comando cria um projeto usando template básico de um projeto react, com o nome “lista-tarefas”. Usamos a ferramenta vite para criar o projeto.

Entre no diretório do projeto através do comando: $cd lista-tarefas

Instale as dependências do projeto através do comando: $npm installIsso vai instalar os pacotes necessários para o aplicativo funcionar, tais como o react e o servidor de desenvolvimento do vite. Todos estes pacotes estão listados no arquivo package.json criado pelo vite durante a criação do projeto. O arquivo package.json pode ser encontrado dentro da pasta lista-tarefas, que é a pasta do nosso projeto.

Ao terminar de instalar os pacotes, execute o comando para iniciar o servidor de desenvolvimento do vite: $npm run devAo executar este comando, o servidor será iniciado. Então, você pode abrir um navegador de sua preferência e acessar nosso aplicativo pelo endereço http://localhost:5173

Na pasta src, crie uma outra pasta chamada de components. Dentro desta pasta, crie um arquivo chamado ToDo.jsx.

Por enquanto, este componente irá retornar uma div vazia.


Dentro desta div vazia, criada no componente anterior, crie uma tag ul que representa uma lista não ordenada.

Receba no parâmetro da função do componente, as props que representeam um array de strings. Cada string representa uma tarefa.

Dentro da lista, crie uma tag li que conterá o texto da tarefa. O número de lis deve ser correspondente ao numero de tarefas.

Crie um componente chamado de Task. Este componente deverá ficar no arquivo src/componentes/Task.jsx.

Este componente deverá retornar a tag li mencionada no exercício anterior.