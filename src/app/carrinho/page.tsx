"use client";
import { useState } from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { TfiTrash } from "react-icons/tfi";

export default function Carrinho() {
	const [quantidade, setQuantidade] = useState(1);
	return (
		<div className="bg-brand-100 min-h-screen">
			<div className="w-full">
				<img
					src="/img/quadriculado.png"
					alt=""
					className="w-full"
				/>
			</div>
			<section className="">
				<div className="row">
					<div className="container font-sphere">
						<div className="flex flex-col gap-y-2 mt-8">
							<div className="bg-brand-200 py-1 flex px-2 gap-2">
								<div className="max-w-[2rem]">
									<img
										src="/img/carlitos-amarelo.png"
										alt=""
									/>
								</div>
								<div className="flex items-center">
									<h2 className="text-brand-100  sm:text-lg tracking-wider uppercase">
										Carrinho
									</h2>
								</div>
							</div>
						</div>
						{quantidade > 0 && (
							<>
								<div className="flex flex-wrap md:flex-nowrap gap-3 place-content-center md:place-content-between mt-3 sm:justify-between">
									<div className="flex gap-x-2 w-full md:w-fit">
										<div className="max-w-[7rem]">
											<img
												src="/img/carrinho.png"
												alt=""
											/>
										</div>
										<div className="flex flex-col justify-end leading-none">
											<h2 className="text-brand-300 text-lg leading-tight">
												1X ONION BURGUER
											</h2>
											<p className="text-brand-200">R$ 43,00</p>
											<p className="text-brand-300 uppercase">Adicionais</p>
											<p className="uppercase text-brand-300/50 text-sm">
												Cream Cheese
											</p>
										</div>
									</div>
									<div className="flex items-center">
										<div className="flex gap-x-4 items-center border border-brand-300 rounded-full py-2 px-3">
											<span>
												<button
													onClick={() => setQuantidade(quantidade - 1)}
													className="p-1 text-xl bg-brand-200 text-brand-100 rounded-full"
												>
													<HiMinusSm />
												</button>
											</span>
											<span className="text-brand-200">{quantidade}</span>
											<span>
												<button
													onClick={() => setQuantidade(quantidade + 1)}
													className="p-1 text-xl bg-brand-200 text-brand-100 rounded-full"
												>
													<HiPlusSm />
												</button>
											</span>
										</div>
									</div>
								</div>
								<div className="flex w-full items-center mt-5">
									<div className="w-2 h-2 bg-brand-400/60 rounded-full"></div>
									<div className="w-full h-1 bg-brand-400/60"></div>
									<div className="w-2 h-2 bg-brand-400/60 rounded-full"></div>
								</div>
							</>
						)}

						{quantidade > 0 ? (
							<div className="mt-5 flex place-content-center">
								<a
									href="/"
									className="w-fit px-3 py-1 pb-1.5 rounded-full bg-brand-200 text-brand-100 uppercase font-sphere"
								>
									comprar mais
								</a>
							</div>
						) : (
							<div className="mt-5 flex flex-col items-center place-content-center">
								<h2 className="text-brand-200 mb-3">
									Seu carrinho está vazio!
								</h2>
								<a
									href="/"
									className="w-fit px-3 py-1 pb-1.5 rounded-full bg-brand-200 text-brand-100 uppercase font-sphere"
								>
									Menu
								</a>
							</div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
}
