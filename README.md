# Agendamento-de-Aulas
Como funcionário do Suporte Tecnológico do EAD da Unoeste, identifiquei uma demanda de agendamentos de aulas onde tínhamos muito retrabalho ao montar uma planilha passando cada aula de um outro documento. Com isso, desenvolvi um sistema onde os professores poderiam realizar seus próprios agendamentos de aula.
No sistema o professor está apto a realizar um cadastro, onde deverá informar Matrícula, Nome, E-mail educacional e uma senha. Caso já possua cadastro, poderá realizar o login. 

Ao acessar, o nome do professor e e-mail informados no cadastro já são definidos por padrão, já que esses dois dados servirão para alimentar a nossa planilha. O professor deverá, então, informar o seu curso e a sua disciplina, data e horário da aula. Ao final, todas essas informações serão enviadas para uma tabela onde o professor poderá visualizar as aulas agendadas e ao final, poderá exportar as mesmas para uma planilha do excel, que é o nosso objetivo final. Feito isso, a planilha deverá sofrer ua breve formatação para que as colunas se alinhem.

Vale ressaltar que todo armazenamento de informações está utilizando o armazenamento do próprio navegador (localStorage). Por ser interessante, o próximo passo seria a implementação de um banco de dados para a melhor organização das informações. 
