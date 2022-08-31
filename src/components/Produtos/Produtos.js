import React from 'react'
import { Link } from 'react-router-dom';
import Head from '../Head/Head';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchProdutos(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const produtos = await response.json();
        setProdutos(produtos);
      } catch (error) {
        setError('Ocorreu um erro inesperado')
      } finally {
        setLoading(false)
      }
    }
    fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
  }, [])

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produtos === null) return null;
  return (
    <section className={styles.produtos + " animeLeft"}>
      <Head title={`Ranek`} description={`Descrição do site Ranek`} />
      {produtos.map(produto => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  )
}

export default Produtos