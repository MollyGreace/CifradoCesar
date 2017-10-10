# CIFRADO CÉSAR

  Crea una web que pida, por medio de un `prompt()`, una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

  #### Por ejemplo:

   * Texto original: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
   * Texto codificado: `HIJKLMNOPQRSTUVWXYZABCDEFG`
 
## Consideraciones Específicas

   * Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: `(x - n) % 26`
   * Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher.
   * El usuario no debe poder ingresar un campo vacío o que contenga números.

## Desarrollo

##### Diagrama de Flujo

[Diagrama de Flujo](http://subefotos.com/ver/?3757363a28a24dba273c3b0227512740o.png
)


##### Pseudocódigo
```
Algoritmo CifradoCesar
	Escribir Ingresar 'frase'
	frase = array[]
	// El abecedario Cesar se utilizará para la fórmula de descifrado
	abcCesar = [26]
	Si frase='' Entonces
		// Regresa hacia arriba
		Escribir Ingrese 'frase'
	SiNo
		// c:constante de letra
		c = constante
		// Para hallar el valor de letter 'encriptado'
		form = ((x-c+n)%26)+c
	FinSi
	Escribir frase encriptada
FinAlgoritmo
```