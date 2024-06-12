import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}){

	// States
	const [likeCount, setLikeCount] = useState(0);

	// handles
	function handleDeleteComment(){
		onDeleteComment(content)
	}

	function handleLikeCount(){
		setLikeCount((state) => {
			return state + 1
		})
	}

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
						<button onClick={handleDeleteComment} title='Deletar Comentário'>
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleLikeCount}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	)
}