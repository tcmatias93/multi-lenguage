import Layout from "../components/Layout"
import useTranslation from "next-translate/useTranslation"

const about = () => {
  const {t} = useTranslation()
 
  return (
    <Layout>
      <h1>{t('about:titule')}</h1>
      <p>{t('about:descripcion')} </p>
    </Layout>
  )
}

export default about