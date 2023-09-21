import { z } from 'zod';

export const registerSchema = z
	.object({
		name: z.string().trim().nonempty('O nome é obrigatório'),
		email: z
			.string()
			.trim()
			.nonempty('O e-mail é obrigatório')
			.email('Forneça um e-mail válido'),
		bio: z.string().trim().nonempty('O campo é obrigatório'),
		contact: z.string().nonempty('O campo é obrigatório'),
		course_module: z.string().nonempty('Selecione seu módulo'),
		password: z
			.string()
			.trim()
			.min(8, 'A senha deve conter no mínimo 8 caracteres')
			.regex(/(?=.*?[a-zA-Z])/, 'É necessário pelo menos uma letra')
			.regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número')
			.regex(
				/(?=.*?[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/,
				'É necessário pelo menos um caracter especial'
			),
		confirm: z.string().trim().nonempty('Confirmação de senha é obrigatória'),
	})
	.refine(({ password, confirm }) => password === confirm, {
		message: 'As senhas precisam corresponder',
		path: ['confirm'],
	});
