import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, publishedAt, content}){
	// Props
	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true
	})

	// States
	const [comments, setComments] = useState(["Post muito legal!!"]);
	const [newCommentText, setNewCommentText] = useState('')

	// Handles
	function handleCreateNewComment(e){
		e.preventDefault();
		setComments([...comments, e.target.comment.value])
		setNewCommentText('')
	}

	function handleNewCommentText(e){
		e.target.setCustomValidity("")
		setNewCommentText(e.target.value)
	}

	function handleNewCommentInvalid(){
		event.target.setCustomValidity("Este campo é obrigatório")
	}

	// functions
	function deleteComment(commentToDelete){
		const commentsWithoutDeletedOne = comments.filter( comment =>{
			return comment !== commentToDelete
		})
		setComments(commentsWithoutDeletedOne)
	}

	// Variáveis
	const isNewCommentsEmpty = newCommentText.length === 0

	return(
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
			</header>
			<div className={styles.content}>
				{content.map( line =>{
					return line.type === 'paragraph'
					? (
						<p key={line.content}>{line.content}</p>
					)
					: (
						<p key={line.content}><a href="">{line.content}</a></p>
					)
				})}
			</div>
			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea
					placeholder='Deixe um comentário'
					name='comment'
					value={newCommentText}
					onChange={handleNewCommentText}
					required
					onInvalid={handleNewCommentInvalid}
				/>
				<footer>
					<button
						type="submit"
						disabled={isNewCommentsEmpty}>
						Comentar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map( comment => {
					return (
						<Comment
							onDeleteComment={deleteComment}
							key={comment}
							content={comment}
						/>
					)
				})}
			</div>
		</article>
	)
}