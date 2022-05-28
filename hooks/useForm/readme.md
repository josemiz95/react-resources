# useForm
This is a custom hook to manage forms and it's submit. To use it we need to pass two parameters: 
- **First**: Object that contains all parameters on form
- **Second**: Object with the request information `{url, method, headers}`
> IMPORTANT: the fields shoul have the same name as property name in the object

``` 	
export const FormWithCustomHook = () => {
	const [formState, handleInputChange, handelSubmit] = useForm({ name:'', email:'', password:'' });
	const {name, email, password} = formState;
	return (
		<form onSubmit={handelSubmit}>
			<h1>FormWithCustomHook</h1>
			<hr/>

			<div className='form-group'>
				<input type='text' name='name'
					value={name} onChange={handleInputChange}/>
			</div>
			<div className='form-group'>
				<input type='text' name='email'
						value={email} onChange={handleInputChange}/>
			</div>
			<div className='form-group'>
				<input type='password' name='password'
						value={password} onChange={handleInputChange}/>
			</div>
			<button type='submit'>Guardar</button>
		</form>
	)
}
```
