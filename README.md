#    CADASTRO DE PESSOAS

## API RESTful com Node.js e MongoDB | Express e Mongoose

- Api REST para ser implemntada em sistema de cadastro.

## Como utilizar


>### **`[POST]`** `{{URL}}/person`

```json
[
    {
        "name":"",
        "salary":"",
        "approved": 
    }
]
```

### **`[GET]`** `{{URL}}/person` - Consulta de cadastro

Para que você consiga consultar os clientes criados criamos duas formas para você. Exemplo 1 e 2:

1. *`{{URL}}/person`*
 - Basta execultar/enviar request e será exibido todos os cadastros criados.

2. *`{{URL}}/person/Id`*
 - Informe o `id` e será exibido o cadastros criados.
 


### **`[PATCH]`**`{{URL}}/person/Id` - Atualização cadastro clientes

 - Informe o `id` do cadastro criado como parâmetros e no corpo do request o json com as alterações. Exemplo abaixo: 

 ```json
[    
    {
        "name": "",
        "salary": ,
        "approved": 
    }
]
```

### **`[DELETE]`**`{{URL}}/person/Id` - Excluir cadastro clientes

- Informe o `id` do cadastro criado como parâmetros e será excluido