"use client"
import { useState } from "react"
import "../../globals.css"
import Input from "./Input";
import Link from "next/link";
import AuthSocialButton from "./AuthSocialButton";
import {BsGithub,BsGoogle} from "react-icons/bs"


type Variant = 'SIGNIN' | 'SIGNUP';
const AuthForm = () => {
	const [variant, setVariant] = useState<Variant>('SIGNIN')
	const toogleVariant = () => {
		if (variant === "SIGNIN") {
			setVariant('SIGNUP')
		} else {
			setVariant('SIGNIN')
		}
	}
	const socialAction = (action:string)=>{
		console.log(action)
	}
	return (
		<form
			className="
			        px-4
			        py-8
			        shadow
			        sm:rounded-lg
			        sm:px-10
				bg-gradient-to-r from-[#170330] to-[#0C0217]
				text-center
				text-white
				lg:w-[40%]
			"
		>
			<p
				className="
				        gradient_texts
					text-xl
				"
			>Welcome,let's {variant==="SIGNIN" ? "continue": "get started" }</p>
			{variant === 'SIGNIN' ? (
				<div className="text-white">
					<Input placeholder="Email" styles="" type="" />
					<Input placeholder="Password" styles="" type="password" />
					<div
						className="
						        flex
							flex-row
							justify-between
							items-center
						"
					>
						<div className="my-2">
							<input type="checkbox" />&nbsp;&nbsp;
							<label>Remember Password</label>
						</div>
						<p>Forgot Password</p>
					</div>
					<input type="submit" value="Sign In" className='my-2 py-2 px-10  cursor-pointer rounded-full gradient-texts bg-gradient-to-bl from-[#FF00C7] to-[#AD00FF]' />
				</div>
			) : (
				<div>
					<Input placeholder="Name" styles="" type="" />
					<Input placeholder="Email" styles="" type="" />
					<Input placeholder="Username" styles="" type="" />
					<Input placeholder="Password" styles="" type="password" />
					<input type="submit" value="Sign Up" className='my-2 py-2 px-10  cursor-pointer rounded-full gradient-texts bg-gradient-to-bl from-[#FF00C7] to-[#AD00FF]' />
				</div>
			)}
			<div>
				{variant === 'SIGNIN' ? <p>Do not have account?<span className="font-[900] cursor-pointer" onClick={toogleVariant}>Create an account</span></p> : <p>Already a member?<span className="font-[900] cursor-pointer" onClick={toogleVariant}>Sign In</span></p>}
			</div>
			<div className="relative my-2">
				<div
					className="
                                                absolute 
                                                inset-0 
                                                flex 
                                                items-center
                                        "
				>
					<div className="w-full border-t border-gray-300" />
				</div>
				<div className="relative flex justify-center text-sm">
					<span className="bg-[#120324] px-5">
						OR
					</span>
				</div>
			</div>
			<div className="mt-6 flex gap-2">
				<AuthSocialButton
					icon={BsGithub}
					label="Github"
					onClick={() => socialAction('github')}
				/>
				<AuthSocialButton
					icon={BsGoogle}
					label="Google"
					onClick={() => socialAction('google')}
				/>
			</div>
		</form>

	)
}

export default AuthForm