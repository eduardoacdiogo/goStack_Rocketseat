import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
	const user = createUser({
		name: 'Diogo',
		email: 'email',
		password: 'senha',
		techs: ['node.js', 
						'react.js', 
						'react-native', 
						{title: 'Javascript', experience: 100}
		]}, 
	);
  return response.json({message: 'Hello World'});
}