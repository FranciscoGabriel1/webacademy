import { useRef, useState } from "react";
import CustomTable, { TableColumn } from "../Tabela";
import ConfirmationModal from "../Confirmacao";

interface IProduto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

export default function ListaProdutos() {
  const [nameProduct, SetNameProduct] = useState<string>("");
  const [precoProduct, SetPrecoProduct] = useState<number>(0);
  const [estoqueProduct, SetEstoqueProduct] = useState<number>(0);

  const productToDelete = useRef<IProduto>();

  const [isModalConfirmationOpen, SetIsModalConfirmationOpen] = useState(false);

  const [products, SetProducts] = useState<IProduto[]>([]);

  function RemoverItemTabela(produtoToDelete: IProduto) {
    SetProducts(
      products.filter((produto) => produto.id !== produtoToDelete.id)
    );
  }

  const columnsProducts: TableColumn<IProduto>[] = [
    { head: "ID", acessor: "id" },
    { head: "Nome", acessor: "nome" },
    { head: "Estoque", acessor: "estoque" },
    { head: "Preco", acessor: "preco" },
    {
      head: "Remover",
      isActionButton: true,
      onActionClick: (obj) => {
        productToDelete.current = obj;
        SetIsModalConfirmationOpen(true);
        //RemoverItemTabela(obj);
      },
    },
    { head: "Editar", isActionButton: true },
  ];

  function AddProductArray() {
    const jsonProduto: IProduto = {
      id: products.length + 1,
      nome: nameProduct,
      estoque: estoqueProduct,
      preco: precoProduct,
    };
    SetProducts([...products, jsonProduto]);
  }

  return (
    <div>
      <h1>Produtos</h1>
      <input
        type="text"
        value={nameProduct}
        placeholder="Nome do Produto"
        onChange={(e) => SetNameProduct(e.target.value)}
      />
      <input
        type="text"
        value={precoProduct}
        placeholder="Preco do Produto"
        onChange={(e) => SetPrecoProduct(parseFloat(e.target.value))}
      />
      <input
        type="text"
        value={estoqueProduct}
        placeholder="Estoque do Produto"
        onChange={(e) => SetEstoqueProduct(parseInt(e.target.value))}
      />
      <button onClick={() => AddProductArray()}>Inserir Produto</button>

      <CustomTable data={products} columns={columnsProducts} />

      <ConfirmationModal
        isShow={isModalConfirmationOpen}
        message="Deseja excluir esse produto?"
        title="Alerta"
        onCancel={() => {
          SetIsModalConfirmationOpen(false);
        }}
        onConfirm={() => {
          RemoverItemTabela(productToDelete.current!);
          SetIsModalConfirmationOpen(false);
        }}
      />
    </div>
  );
}
