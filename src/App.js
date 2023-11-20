import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

let hashmapNotas = {};
let hashmapComentarios = {"Comentario":["teste"]};
//Cookies.set("hashmapComentarios", JSON.stringify(hashmapComentarios));

function App() {
  // Carregar hashmap salvo em cookies ao montar o componente
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const savedHashmap = Cookies.get("hashmap");
    if (savedHashmap && JSON.stringify(hashmapNotas) !== savedHashmap) {
      hashmapNotas = JSON.parse(savedHashmap);
    }
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return <RouterProvider router={router} />;
}

export function insereNotaHashmap(chave, hashValor) {

  
  if (!(chave in hashmapNotas)) {
    hashmapNotas[chave] = [];
  }

  for (let i in hashValor) {
    console.log("i", i);
    if (!isNaN(hashValor[i]) && hashValor[i] != null) {
      hashmapNotas[chave].push(Number(hashValor[i])); // Converta o valor para número
    }
  }

  console.log("teste", hashmapNotas);
  var notaGeral = 0;
  var quantidade = 0;

  for (let val of hashmapNotas[chave]) {
    notaGeral += val;
    quantidade += 1;
  }

  // Atualizar cookies imediatamente após inserir a nota no hashmap
  Cookies.set("hashmap", JSON.stringify(hashmapNotas));

  return notaGeral / quantidade;
}

export function getHashMap(chave) {
  const savedHashmap = Cookies.get("hashmap");
  const hashmap = savedHashmap ? JSON.parse(savedHashmap) : {};

  var notaGeral = 0;
  var quantidade = 0;

  if (Array.isArray(hashmap[chave])) {
    // Verifica se é um array antes de iterar
    for (let val of hashmap[chave]) {
      notaGeral += val;
      quantidade += 1;
    }

    return notaGeral / quantidade;
  } else {
    console.error("hashmap", chave, "não é um array.");
    return null;
  }
}

export function insereComentarioHashmap(chave, comentario) {
  console.log("com",comentario )
  const savedHashmap = Cookies.get("hashmapComentarios");

  if (savedHashmap) {
    hashmapComentarios = JSON.parse(savedHashmap);
  }

  if (!(chave in hashmapComentarios)) {
    hashmapComentarios[chave] = [];
  }

  if (comentario != null) {
    hashmapComentarios[chave].push(comentario);
  }

  Cookies.set("hashmapComentarios", JSON.stringify(hashmapComentarios));

  return hashmapComentarios[chave];
}

export function getHashMapComentarios(chave) {
  const savedHashmap = Cookies.get("hashmapComentarios");
  console.log( "teste:" , Cookies.get("hashmapComentarios"))

  if (savedHashmap) {
    hashmapComentarios = JSON.parse(savedHashmap);
  }
  console.log("savedHashmap:", savedHashmap);

  const hashmap = savedHashmap ? JSON.parse(savedHashmap) : {};
  console.log("hashmap:", hashmap);

  if (hashmap && hashmap[chave] && Array.isArray(hashmap[chave])) {
    return hashmap[chave];
  } else {
    console.error("hashmapComentarios", chave, "não é um array válido.");
    return [];
  }
}

export default App;
