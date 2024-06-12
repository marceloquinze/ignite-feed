import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({content}){
	return(
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/diego3g.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Marcelo Vieira</strong>
							<time title='11 de maio às 09:22' dateTime="2022-05-11 09:22">Há cerca de 1h atrás</time>
						</div>
						<button title='Deletar Comentário'>
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	)
}