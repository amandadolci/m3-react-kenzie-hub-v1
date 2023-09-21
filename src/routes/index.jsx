import { useState } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import { api } from '../services/api';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Dashboard } from '../pages/Dashboard';
import { PageNotFound } from '../pages/PageNotFound';
import { Navbar } from '../components/Navbar';
import { Input } from '../components/Input';
import Eye from '../assets/eye.svg';

export function MainRoutes() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState('Cadastrar');
	const [visiblePassword, setVisiblePassword] = useState(false);

	const successToast = () => toast.success('Cadastro realizado com sucesso.');
	const errorToast = message => toast.error(`Erro ao realizar cadastro: ${message}`);
	const loginErrorToast = message => toast.error(message);

	function authentication() {
		const token = localStorage.getItem('@KenzieHub:token');
		if (token) {
			Navigate({ to: '/dashboard' });
		}
	}

	return (
		<Routes>
			<Route
				path='/login'
				element={
					<Login
						authentication={authentication}
						visiblePassword={visiblePassword}
						setVisiblePassword={setVisiblePassword}
						loading={loading}
						setLoading={setLoading}
						Link={Link}
						navigate={navigate}
						useForm={useForm}
						zodResolver={zodResolver}
						api={api}
						Navbar={Navbar}
						Input={Input}
						Toaster={Toaster}
						loginErrorToast={loginErrorToast}
						Eye={Eye}
					/>
				}
			/>
			<Route
				path='/register'
				element={
					<Register
						authentication={authentication}
						visiblePassword={visiblePassword}
						setVisiblePassword={setVisiblePassword}
						loading={loading}
						setLoading={setLoading}
						Link={Link}
						navigate={navigate}
						useForm={useForm}
						zodResolver={zodResolver}
						api={api}
						Navbar={Navbar}
						Input={Input}
						Toaster={Toaster}
						successToast={successToast}
						errorToast={errorToast}
						Eye={Eye}
					/>
				}
			/>
			<Route
				path='/dashboard'
				element={
					<Dashboard
						Navigate={Navigate}
						Link={Link}
						navigate={navigate}
						Navbar={Navbar}
					/>
				}
			/>

			<Route path='/' element={<Navigate to='/login' />} />
			<Route
				path='*'
				element={<PageNotFound Link={Link} navigate={navigate} Navbar={Navbar} />}
			/>
		</Routes>
	);
}
