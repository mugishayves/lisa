import Image from 'next/image'
import React from 'react'

const Privacy = () => {
	return (
		<div
			className="
				p-4 
			"
		>
			<div
				className="
			                bg-gradient-to-b from-[#0F0021] to-[#0F0021] , bg-[#F8F8F8]
			                rounded-md  
					h-[92vh] 
					p-2
			        "
			>
				<p className='text-2xl'>Privacy</p>
				<div className="h-1 w-full bg-[#AD00FF] my-4" />
				<div
					className='
					        flex
						flex-row
						gap-2
						h-[80%]
						w-full
					'
				>
					<div className='border-r-[2px] px-4'>
						<Image width={200} height={200} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
					</div>
					<div className='w-[75%]'>
						<p>Personal Information</p>
						<div
							className='
						        my-2
							p-2
							border-[2px]
							rounded-md
						        '
						>
							<div
								className='
							        flex
								flex-row
								gap-5
								items-center
								my-2
							'
							>
								<div>
									<p>Names :</p>
								</div>
								<p>Mugisha Yves</p>
							</div>
							<div
								className='
							        flex
								flex-row
								gap-5
								items-center
								my-2
							'
							>
								<div>
									<p>Email :</p>
								</div>
								<p>mugishayves189000@gmail.com</p>
							</div>
							<div
								className='
							        flex
								flex-row
								gap-5
								items-center
								my-2
							'
							>
								<div>
									<p>Telephone :</p>
								</div>
								<p>+250798667792</p>
							</div>
							<div
								className='
							        flex
								flex-row
								gap-5
								items-center
								my-2
							'
							>
								<div>
									<p>Username :</p>
								</div>
								<p>@broony189</p>
							</div>
							<div
								className='
							        flex
								flex-row
								gap-10
								items-baseline
								my-2
							'
							>
								<div>
									<p>Location :</p>
								</div>
								<div>
									<div
										className='
							                                flex
								                        flex-row
								                        gap-5
								                        items-center
								                        my-2
							                        '
									>
										<div>
											<p>Country :</p>
										</div>
										<p>Rwanda</p>
									</div>
									<div
										className='
							                                flex
								                        flex-row
								                        gap-5
								                        items-center
								                        my-2
							                        '
									>
										<div>
											<p>City :</p>
										</div>
										<p>Musanze</p>
									</div>
								</div>
							</div>
							<div
								className='
							        flex
								flex-row
								gap-5
								items-center
								my-2
							'
							>
								<div>
									<p>Gender :</p>
								</div>
								<p>Male</p>
							</div>
							<div
								className='
							        flex
								flex-row
								gap-5
								items-center
								my-2
							'
							>
								<div>
									<p>DOB :</p>
								</div>
								<p>4 September 200*</p>
							</div>
							<div
								className='
							        flex
								flex-row
								gap-10
								my-2
							'
							>
								<div>
									<p>Relatives :</p>
								</div>
								<div className=''>
									<div
										className="
                                                                                        flex
                                                                                        flex-row
                                                                                        gap-4
											items-center
                                                                                "
									>
										<Image width={50} height={50} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
										<div>
											<p className='text-xl'>Mugisha Yves</p>
											<p className='text-xs'>@broony189</p>
										</div>
									</div>
									<div
										className="
                                                                                        flex
                                                                                        flex-row
                                                                                        gap-4
											items-center
                                                                                "
									>
										<Image width={50} height={50} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
										<div>
											<p className='text-xl'>Mugisha Yves</p>
											<p className='text-xs'>@broony189</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-row items-center justify-between mx-10'>
					<div></div>
					<button
						className='
						        bg-[#AD00FF]
							px-10
							py-2
							rounded-md
						'
					>
						<p>Edit</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Privacy