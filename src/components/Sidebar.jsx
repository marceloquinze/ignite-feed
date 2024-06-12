import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
	return(
		<aside className={styles.sidebar}>
			<img className={styles.cover} src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=40&w=500" />
			<div className={styles.profile}>
				<Avatar src="https://github.com/marceloquinze.png" />
				<strong>Marcelo</strong>
				<span>Web Developer</span>
			</div>
			<footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	)
}