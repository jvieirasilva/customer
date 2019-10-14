# Customer

1 - Entrar na pasta onde se encotra app angular customer
2 - npm install 
3 - npm run start 
4 - Executar java -jar Customer.jar
5 - Executar esse script no database test do mongodb porta 27017


Script:

db.customer.insertMany( 
  [ 
		{ "firstName" : "Test","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] }, 
		{ "firstName" : "Test1","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test2","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test3","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test4","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test5","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test6","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test7","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test8","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test9","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test10","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test11","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test12","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test13","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test14","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test15","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test16","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test17","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test18","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test19","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test20","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test21","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test22","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test23","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test24","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test25","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test26","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test27","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test28","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test29","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test30","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test31","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test32","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test33","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test34","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test35","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test36","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test37","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test38","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test39","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test40","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test41","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test42","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test43","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test44","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test45","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test46","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test47","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test48","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test49","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] },
		{ "firstName" : "Test50","lastName" : "Vieira","cellPhone" : "11954423526","email" : "apoionet.Test@gmail.com", "age" : 50, "address" : [ { "addType": "Avenida", "street" : "Henriqueta Mendes Guerra 1330", "complement" : "apt 152 bl 22", "city" : "Barueri", "state" : "SP", "zipCode" : "06401160" } ] }
]);

