import Layout from "../components/Layout";
import useTranslation from 'next-translate/useTranslation'

export default function Home() {

  const { t, lang } = useTranslation('common')
  const dato = t('predeterminado')

  return (
    <div>
      <Layout>
        <h1>{dato}</h1>
      </Layout>
    </div>
  );
}

