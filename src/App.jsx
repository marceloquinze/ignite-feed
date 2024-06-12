import { Header } from "./components/Header";
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

// author: {avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/marceloquinze.png',
      name: 'Marcelo Vieira',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala devs'},
      { type: 'paragraph', content: 'Fala devs'},
      { type: 'link', content: 'jane.design/docsss'},
    ],
    publishedAt: new Date('2024-06-12 10:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Designer'
    },
    content: [
      { type: 'paragraph', content: 'Fala devs'},
      { type: 'paragraph', content: 'Fala devs'},
      { type: 'link', content: 'jane.design/docsss'},
    ],
    publishedAt: new Date('2024-06-11 20:00:00')
  },
];

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map( post => {
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
