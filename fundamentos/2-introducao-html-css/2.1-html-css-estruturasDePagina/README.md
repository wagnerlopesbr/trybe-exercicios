 Versionando seu código

Para versionar seu código, utilize o seu repositório de exercícios. 😉

Abaixo você vai ver exemplos de como organizar os exercícios do dia em uma branch, com arquivos e commits específicos para cada exercício. Você pode seguir esse padrão para realizar os exercícios a seguir.

    Abra a pasta de exercícios:

cd ~/trybe-exercicios

    Certifique-se de que está na branch main e que ela está sincronizada com a remota. Caso você tenha arquivos modificados e não comitados, deverá fazer um commit ou checkout dos arquivos antes desse passo.

git checkout main

git pull

    A partir da main, crie uma branch com o nome exercicios/<modulo>-<secao>.<dia>, onde <secao> representa a seção atual e <dia> representa o dia do conteúdo.

git checkout -b exercicios/<modulo>-<secao>.<dia>

    Caso seja o primeiro dia deste módulo, crie um diretório com o nome do módulo e o acesse na sequência:

mkdir <nome-do-módulo>

cd <nome-do-módulo>

    Caso seja o primeiro dia da seção, crie um diretório para ela seguindo o padrão secao-<secao>-<titulo-da-secao>, onde <secao> representa o número da seção e <titulo-da-secao> representa o título do conteúdo da seção. Por exemplo: secao-4-introdução-a-javascript-e-logica-de-programacao. Depois de criar o diretório, acesse-o usando o comando cd.

mkdir secao-<secao>-<titulo-da-secao>

cd secao-<secao>-<titulo-da-secao>

    Crie um diretório para o dia seguindo o padrão dia-<dia>-<titulo-do-dia>, onde <dia> representa o número do dia e <titulo-do-dia> representa o título do conteúdo do dia. Por exemplo: dia-2-javascript-array-e-loop-for. Depois de criar o diretório, acesse-o usando o comando cd.

mkdir dia-<dia>-<titulo-do-dia>

cd dia-<dia>-<titulo-do-dia>

    A partir deste ponto, você já está com seu setup preparado para realizar as atividades propostas, então mãos a obra! Mas não esqueça de inserir os arquivos referentes aos exercícios dentro do diretório criado ~/trybe-exercicios/<nome-do-modulo>/secao-<secao>-<titulo-da-secao>/dia-<dia>-<titulo-do-dia>. Também lembre-se de fazer commits pequenos e com mensagens bem descritivas, preferencialmente a cada exercício resolvido.

Verifique os arquivos alterados/adicionados:

git status

On branch exercicios/<modulo>-<secao>.<dia>

Changes not staged for commit:

(use "git add <file>..." to update what will be committed)

(use "git checkout -- <file>..." to discard changes in working directory)


modified:   exercicio-1

Adicione os arquivos que farão parte daquele commit:

# Se quiser adicionar os arquivos individualmente

git add <caminho-para-o-arquivo>


# Você também pode adicionar todos os arquivos de uma vez, porém, atente-se para não adicionar arquivos indesejados acidentalmente

git add --all

Faça o commit com uma mensagem descritiva das alterações:

git commit -m "Mensagem descrevendo alterações"

    Você pode visualizar o log de todos os commits já feitos naquela branch com git log.

git log

commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercicios/<módulo>-<seção>.<dia>)

Author: Tryber Bot <tryberbot@betrybe.com>

Date:   Wed Feb 09 17:48:01 2022 -0300


    Exercício 2 - mudando o evento de click para mouseover, tirei o alert e coloquei para quando clicar aparecer uma imagem do lado direito da tela


commit c0701d91274c2ac8a29b9a7fbe4302accacf3c78

Author: Tryber Bot <tryberbot@betrybe.com>

Date:   Wed Feb 09 16:47:21 2022 -0300


    Exercício 2 - adicionando um alert, usando função e o evento click


commit 6835287c44e9ac9cdd459003a7a6b1b1a7700157

Author: Tryber Bot <tryberbot@betrybe.com>

Date:   Wed Feb 09 15:46:32 2022 -0300


    Resolvendo o exercício 1 usando eventListener

    Agora que temos as alterações salvas no repositório local, precisamos enviá-las para o repositório remoto. No primeiro envio, a branch exercicios/<modulo>-<secao>.<dia> não vai existir no repositório remoto, então precisamos configurar o remote utilizando a opção --set-upstream (ou -u, que é a forma abreviada).

git push -u origin exercicios/<modulo>-<secao>.<dia>

    Após realizar o passo 9, podemos abrir a Pull Request a partir do link que aparecerá na mensagem do push no terminal, ou na página do seu repositório de exercícios no GitHub através de um botão que aparecerá na interface. Escolha a forma que preferir e abra a Pull Request. De agora em diante, você repetirá o fluxo a partir do passo 7 para cada exercício adicionado; porém, como já definimos a branch remota com -u anteriormente, agora podemos simplificar os comandos para:

# Quando quiser enviar para o repositório remoto

git push


# Caso você queria sincronizar com o remoto, poderá utilizar apenas

git pull

    Quando terminar os exercícios, seus códigos devem estar todos comitados na branch exercicios/<modulo>-<secao>.<dia> e disponíveis no repositório remoto do GitHub. Para finalizar, compartilhe o link da Pull Request no canal de Code Review para a monitoria e/ou colegas revisarem. Faça review você também! Lembre-se de que é muito importante para o seu desenvolvimento ler o código de outras pessoas. 🤜🏼🤛🏼


