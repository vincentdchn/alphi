import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Note trombinoscopique #102</title>
        <meta name="description" content="Alphi" />
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>

          <div className={styles.title2}>
              <a href="https://youtu.be/ZRiY0CRl_O8">Type : La balle bleue</a>
          </div>

        <div className={styles.title}>
          Note trombinoscopique #102
        </div>

        <div className={styles.text}>
          Plop. Et maintenant, je fais quoi ? C’est la question que je me pose en faisant sonner le dernier accord de Gouttes, la dernière piste d’Aparté, mon premier presqu’album… Je ne pense pas avoir inventé le concept de faire d’un album une oeuvre non-musicale, mais je pense avoir mis le doigt sur un océan de possibilités. Ce projet, c’est 3 ans de réflexion et 9 mois de réel travail intense avec, dans la dernière ligne droite, une peur immense de terminer tout ça. Non par crainte de ne pas plaire aux gens, mais par l’angoisse de ne pas savoir quoi faire après. Et maintenant, je fais quoi ? J’écris ces mots en me posant cette question. J’ai l’impression que la seule fonction d’un auteur est d’écrire quelque chose, que le truc sorte et vivent, et pendant qu’il vit pour les autres, il meurt doucement pour l’auteur. À peine avez-vous Aparté dans les mains que ce presqu’album est mort pour moi car je ne compte pas le ré-écouter. Non. Je compte travaille sur autre chose. Et maintenant, je fais quoi ? Je pense continuer. Les circuits classiques prennent trop de temps, trop de gens, il y a trop de choses à faire pour aboutir à une idée quand là, je m’isole dans mon studio et je crée des choses. J’ai envie de continuer de créer des choses que vous pouvez écouter. Je trouve ça merveilleux de pouvoir vous transporter où je le souhaite avec simplement deux écouteurs dans vos oreilles. Alors je fais quoi maintenant ? Je continue, j’espère pour le mieux. J’espère qu’Aparté vous aura plu ; je sais que ce projet me plaît à moi, en tout cas. Si vous voulez à votre tour créer un presqu’album - ou même un presqu’single - alors n’hésitez pas, car je n’ai rien inventé. Et puis moi, je retourne dans ma grotte pour vous fournir le meilleur de moi-même, en espérant qu’il sera à la hauteur. Tchou.
        </div>
      </main>

      <footer className={styles.footer}>
         On met un truc ici ? Non je sais pas, je demande juste.
      </footer>

    </div>
  )
}
