import React, { useState, useEffect } from 'react';
import { useWebRTC } from '../../hooks/useWebRTC';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Room.module.css';

export default function Room() {
	const { id: roomId } = useParams();
	const user = useSelector((state) => state.auth.user);
	const { clients, provideRef } = useWebRTC(roomId, user);

	return (
		<div>
			<h1>All Connected Clients</h1>
			{clients.map((client) => {
				return (
					<div
						className={styles.userHead}
						key={client.id}
					>
						<audio
							ref={(instance) => provideRef(instance, client.id)}
							// controls
							autoPlay
						></audio>
						<img
							className={styles.userAvatar}
							src={client.profile}
							alt="profile"
						/>
						<h4>{client.name}</h4>
					</div>
				);
			})}
		</div>
	);
}
