import ArrayStructure from "./components/array-structure";
import ComplexityTable from "./components/complexity-table";

export default function Home() {
  return (
    <div className="grid items-center min-h-screen pb-20 gap-16 p-8 sm:px-20  font-[family-name:var(--font-geist-sans)]">
      <section id="complexity-intro">
        <h1 className="text-3xl font-bold">
          Noções de complexidade
        </h1>
        <br />
        <h2 className="text-2xl">
          Big O Notation
        </h2>

        <p>
          A complexidade do algoritmo é uma medida que avalia a ordem da contagem de operações,
          realizada por um determinado algoritmo ou em função do tamanho dos dados de entrada. Para simplificar,
          a complexidade é uma aproximação grosseira do número de etapas necessárias para executar um algoritmo.
          Quando avaliamos a complexidade, falamos da ordem da contagem de operações, não de sua contagem exata.
        </p>

      </section>

      <section id="complexity-table">
        <ComplexityTable />
      </section>

      <section>
        <p>
          Podemos dizer que o melhor algoritmo para resolver um problema é aquele que possui a menor complexidade de tempo e espaço.
          Em outras palavras, é o algoritmo que, conforme a entrada cresce tendendo ao infinito,
          é aquele que apresenta a menor variação de tempo e memória utilizada para terminar.
        </p>
      </section>

      <section>
        <h1 className="text-3xl font-bold">
          Estruturas de Dados
        </h1>

        <p>
          As estruturas de dados são formas de armazenar e organizar dados em um computador para que possam ser usados de forma eficiente.
          Elas são essenciais para a criação de algoritmos eficientes e para a resolução de problemas de forma eficiente.
        </p>
        <br />

        <ArrayStructure />

      </section>

    </div>
  );
}
