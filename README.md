# 🛒 Shopee Cart - Simulação de Carrinho de Compras

Este projeto consiste em uma **simulação de carrinho de compras executada no terminal**, desenvolvida com **JavaScript e Node.js**, inspirada no funcionamento do carrinho da **Shopee**.

O objetivo é implementar a **lógica principal por trás de um carrinho de compras**, permitindo manipular produtos e calcular valores automaticamente.

Este projeto foi desenvolvido como **desafio prático** do curso:

> **Formação Node.js Fundamentals – Módulo II: Node Modules**  
> Plataforma: [**DIO.me**](https://web.dio.me/)

<br>

## 🚀 Tecnologias Utilizadas

![Stack](https://skillicons.dev/icons?i=nodejs,js)

<br>

## 🎯 Objetivo do Projeto

Implementar a lógica de funcionamento de um **carrinho de compras**, contendo as operações essenciais de manipulação de produtos.

O sistema deve permitir:

- ➕ adicionar produtos ao carrinho
- 📋 listar produtos adicionados
- ➖ remover produtos adicionados anteriormente
- 🔄 atualizar a quantidade de itens do carrinho
- 💰 calcular automaticamente os valores do carrinho

Além disso, a aplicação foi estruturada utilizando **ECMA Script Modules do Node.js**, com o objetivo de manter o código **organizado, reutilizável e de fácil manutenção**.

<br>

## 🧱 Entidades do Sistema

A aplicação foi modelada utilizando **entidades orientadas a objetos**.

### Produto

Representa um produto disponível para compra.

**Atributos**

- `id`
- `nome`
- `preço`
- `estoque`

### Item do Carrinho

Representa um produto que foi adicionado ao carrinho.

**Atributos**

- `id`
- `produto`
- `quantidade`

### Carrinho

Representa o carrinho de compras do usuário.

**Atributos**

- `id`
- `itens do carrinho (lista)`

<br>

## 📚 Conceitos Praticados

Durante o desenvolvimento deste projeto foram aplicados conceitos importantes como:

- modularização com **Node Modules**
- **Programação Orientada a Objetos**
- separação de responsabilidades
- manipulação de arrays
- lógica de negócios para carrinho de compras
- organização de projetos Node.js
