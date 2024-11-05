---
title: Quick Start - Impresion 3D
description: Todo lo que necesitas para empezar a imprimir tu modelo en menos de 15 minutos.
sidebar:
  label: Quick Start
  order: 1
---

## 🛠️ Equipo Necesario

- Impresora 3D (recomendada: Ender 3 o similar)
- Filamento PLA
- Archivo STL de tu modelo
- Software de "slicing" (recomendado: Cura)
- Pinzas y espátula

## 📋 Pasos Básicos

### Preparacion de la impresora
:::caution
 En caso de que estes imprimiendo en el Maker Space, las impresoras ya deberian estar configuradas, en caso de que no (e.g. Falta el filamento), dirigete a los tutoriales especializados de aqui abajo.
:::

#### Asegúrate que la cama de impresión está nivelada

:::note
 Algunas impresoras, como las marca Dremel no requieren este paso ya que se nivelan automaticamente.
:::
[Tutorial para nivelar la cama. (WIP)](/wip)

#### Instala el filamento para impresión
##### Cosas a saber
- Asegúrate que el tipo de filamento en la impresora es el configurado en tu Slicer (PLA, TPU, ABS, etc.)
- Verifica que no hay nudos en el filamento, que no se esté saliendo del carrete y que no esté muy suelto al momento de iniciar la impresión
- Si acabas de cambiar de filamento, purga correctamente el filamento anterior antes de empezar a imprimir para evitar errores

### Configuración del Software

#### Consigue un modelo `.STL` u otro formato apto para impresión

- Si no tienes un modelo propio, puedes encontrar modelos aptos para impresión en repositorios como:
	- [Printables](https://www.printables.com)
	- [Thingiverse](https://www.thingiverse.com)
	- [Cults3D](https://cults3d.com)

- También puedes exportar tus modelos como `.STL` desde Blender utilizando [plugins](https://daler.github.io/blender-for-3d-printing/printing/export-stl.html), o generar modelos sencillos con código utilizando [OpenScad](https://openscad.org/)

#### Configura tu impresión utilizando un `Slicer`
:::note 
Un Slicer es una aplicacion o software que genera un archivo imprimible.

Este archivo incluye no solo el modelo pero tambien la configuracion que la impresora utilizara en esa impresion, como:
- la velocidad de impresion 
- el tamaño de las capas 
- la temperatura del filamento 
- etc…
  
  :::tip
	Los archivos imprimibles son de formato `.gcode`
	:::
:::  


:::tip
Dependiendo de tu sistema operativo, tu impresora, o tus necesidades de configuracion, puedes utilizar diferentes `Slicers`. Si la configuracion es correcta cualquiera puede generar archivos imprimibles para cualquier impresora.

Algunos Slicers posibles incluyen:
- [Cura](https://ultimaker.com/software/ultimaker-cura/) *Mas facil de usar*
- [Prusa Slicer](https://www.prusa3d.com/page/prusaslicer_424/) *Permite configuracion mas avanzada*
- [Orca Slicer](https://orcaslicer.net/) *Mejor UI pero poco conocida*
  
	:::caution
	 Las impresoras marca Dremel utilizan su propio slicer propietario que se recomienda usar para generar las impresiones y puedes llegar a tener problemas si no lo utilizas. [Slicers compatibles con dremel aqui.](https://www.dremel.com/gn/en/digilab/software)
	:::
:::

##### Arrastra o abre tu modelo `.stl` en tu `Slicer`
![](../../attachments/Pasted%20image%2020241104180143.png)

##### Selecciona la configuración deseada o utiliza uno de los perfiles de tu slicer
![](../../attachments/Pasted%20image%2020241104180333.png)

:::note 
Configuracion basica en caso de no contar con un perfil valido
```
- Layer height: 0.2mm
- Infill: 20%
- Temperatura: 200 - 210 C°
- Speed: 45 a 60 mm/s
```
:::

[Tutorial para reducir tus tiempos de impresion](/wip)
#### Presiona `slice` para generar y visualizar tu impresión
![](../../attachments/Pasted%20image%2020241104180703.png)

:::caution
Si tu Slicer te informa de posibles problemas en tu impresion (Usualmente relacionados con adicion o inestabilidad), puedes agregar una **falda** o **brim**, o por otro lado generar soportes y volver a hacer `slice`.

**Activa la generacion de soportes**
![](../../attachments/Pasted%20image%2020241104180932.png)

**Activa la generacion de falda o brim**
![](../../attachments/Pasted%20image%2020241104180954.png)
:::

#### Exporta tu archivo `.gcode` y transfierelo a tu impresora con una USB o SD
- Una vez transferido el archivo deberias poder imprimir tu archivo en tu impresora directamente.

#### ⚙️ Consejos Importantes

- Usa pegamento en barra en la cama para mejor adherencia
- Mantén la impresora en un lugar sin corrientes de aire
- Las primeras capas son criticas, observa con cuidado para encontrar errores temprano

### 🔍 Problemas Comunes y Soluciones

##### El filamento no se adhiere
- Revisa la nivelación
- Limpia la cama con alcohol
- Aumenta temperatura de cama a 60°C (En tu slicer)
- Cubre la cama con pegamento en barra (Cuidado de no generar grumos)

##### Impresión se despega
- Usa `brim` o `raft`
- Reduce velocidad del primer layer
- Verifica que estés utilizando la temperatura correcta para tu filamento
